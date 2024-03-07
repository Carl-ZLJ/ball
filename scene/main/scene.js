class Scene {
    constructor(game) {
        this.game = game
        this.init(game)
    }

    init(game) {
        this.paddle = new Paddle(game)

        this.ball = new Ball(game)

        this.game.registerAction('a', () => this.paddle.moveLeft())

        this.game.registerAction('d', () => this.paddle.moveRight())

        this.game.registerAction('f', () => this.ball.fire())
    }

    draw() {
        const { game, paddle, ball } = this
        game.drawImage(paddle)
        game.drawImage(ball)
    }

    update() {
        const { paddle, ball } = this
        ball.move()
        if (paddle.collide(ball)) {
            ball.speedY *= -1
        }
    }
}
