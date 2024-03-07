class Ball {
  constructor(game) {
    this.game = game
    const { image, w, h } = game.imageByName('ball')
    this.image = image
    this.w = w
    this.h = h
    this.x = (game.w - this.w) / 2
    this.y = 500
    this.speedX = 10
    this.speedY = -10
    this.fired = false
  }

  fire() {
    this.fired = true
  }

  move() {
    if (this.fired) {
      if (this.x < 0 || this.x + this.w > this.game.w) {
        this.speedX *= -1
      }
      if (this.y < 0 || this.y + this.h > this.game.h) {
        this.speedY *= -1
      }
      // move
      this.x += this.speedX
      this.y += this.speedY
    }
  }
}
