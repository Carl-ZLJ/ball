class SceneMain extends GameScene {
    constructor(game) {
        super(game)
        this.init(game)
    }

    init(game) {
        this.paddle = new Paddle(game)
        this.brick = new Brick(game)

        this.balls = []
        this.ball = new Ball(game)
        this.balls.push(this.ball)

        this.ball2 = new Ball(game)
        this.ball2.x = 100
        this.ball2.y = 300
        this.balls.push(this.ball2)

        this.addElement(this.paddle)
        this.addElement(this.balls)
        this.addElement(this.brick)

        this.game.registerAction('a', () => this.paddle.moveLeft())

        this.game.registerAction('d', () => this.paddle.moveRight())

        this.game.registerAction('f', () => this.ball.fire())
        this.game.registerAction('f', () => this.ball2.fire())
    }

    update() {
        const { game, paddle, balls, brick } = this

        for (let x = 0; x < balls.length; x++) {
            const ball = balls[x]
            ball.move()

            const i = paddle.collide(ball)
            // If the collided segment's index is one of 0, 2, 3, 4, 5, 7, 8, 9, the ball will be accelerated,
            // and 3, 4, 8, 9's reflection is different
            // arc part
            if ([3, 4, 8, 9].includes(i)) {
                log('reflect [3, 4, 8, 9]')
                const unitSegVector = this.unitSegVector(paddle.segments[i])

                const newSpeed = this.newBallSpeed(ball, unitSegVector)
                ball.speedX = newSpeed[0]
                ball.speedY = newSpeed[1]
            }

            // line part
            if ([0, 1, 2, 5, 6, 7].includes(i)) {
                log('reflect [0, 1, 2, 5, 6, 7]')
                ball.speedY *= -1
            }

            // accelerate part
            if ([0, 2, 3, 4, 5, 7, 8, 9].includes(i)) {
                log('reflect [0, 2, 3, 4, 5, 7, 8, 9]')
                ball.speedX *= 1.05
                ball.speedY *= 1.05
            }

            let j = brick.collide(ball)
            if ([0, 2].includes(j)) {
                ball.speedY *= -1
            }
            if ([1, 3].includes(j)) {
                ball.speedX *= -1
            }

            if (ball.y > paddle.y + paddle.h) {
                balls.splice(x, 1)
                if (balls.length < 1) {
                    const s = new SceneEnd(game)
                    game.replaceScene(s)
                }
            }
        }
    }

    newBallSpeed(ball, unitSegVector) {
        const speedVector = [ball.speedX, ball.speedY]
        const cos = dot(unitSegVector, speedVector)
        const speedA = scale(unitSegVector, cos)
        const speedB = substract(speedVector, speedA)
        const newSpeed = add(speedA, scale(speedB, -1))

        return newSpeed
    }

    unitSegVector(segment) {
        const tail = segment[0]
        const tip = segment[1]
        const segVector = substract(tip, tail)
        const unitSegVector = normalize(segVector)

        return unitSegVector
    }

    debug() {
        const { game, paddle, ball, ball2, brick } = this
        game.drawPoints(paddle.newPoints)
        game.drawPoints(ball.newPoints)
        game.drawPoints(ball2.newPoints)
        game.drawPoints(brick.newPoints)

        game.canvas.addEventListener(
            'click',
            (e) => {
                let x = e.offsetX,
                    y = e.offsetY
                this.ball.x = x
                this.ball.y = y
                this.ball.update(this.ball.relativePoints, {
                    x: x,
                    y: y,
                })
            },
            {
                once: true,
            },
        )
    }
}
