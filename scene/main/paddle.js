class Paddle {
  constructor(game) {
    this.game = game
    const { image, w, h } = game.imageByName('paddle')
    this.image = image
    this.w = w
    this.h = h
    this.x = (game.w - this.w) / 2
    this.y = 540
    this.speed = 5
  }

  moveLeft() {
    this.x -= this.speed
  }

  moveRight() {
    this.x += this.speed
  }

  collide(ball) {
    if (ball.y + ball.h > this.y) {
      if (ball.x < this.x + this.w && ball.x > this.x) {
        return true
      }
      return false
    }
  }
}
