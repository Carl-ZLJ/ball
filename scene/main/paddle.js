class Paddle {
    constructor(game) {
        this.game = game
        const { image, points, w, h } = game.imageByName('paddle')
        this.image = image
        this.w = w
        this.h = h
        this.x = (game.w - this.w) / 2
        this.y = 540
        this.speed = 5
        this.relativePoints = points
        this.update(this.relativePoints, {
            x: this.x,
            y: this.y,
        })
    }

    move(x) {
        if (x < 0) {
            x = 0
        }
        if (x > this.game.w - this.w) {
            x = this.game.w - this.w
        }
        this.x = x
        this.update(this.relativePoints, {
            x: this.x,
            y: this.y,
        })
    }

    update(points, origin) {
        this.newPoints = offsetPoints(points, origin)
        // outline segments
        this.segments = segmentsFromPoints(this.newPoints)
    }

    moveLeft() {
        this.move(this.x - this.speed)
    }

    moveRight() {
        this.move(this.x + this.speed)
    }

    collide(ball) {
        // If the collided segment's index is one of 0, 2, 3, 4, 5, 7, 8, 9, the ball will be accelerated,
        // and 3, 4, 8, 9's reflection is different

        for (let i = 0; i < this.segments.length; i++) {
            const p = this.segments[i]
            // TODO: Which area is the collide point in? LEFT and RIGHT side 
            // TODO: of the paddle are SPECIAL
            for (let j = 0; j < ball.segments.length; j++) {
                const b = ball.segments[j]
                if (calcIntersection(p[0], p[1], b[0], b[1])) {
                    return i                    
                }
            }
        }
        return -1
    }


}
