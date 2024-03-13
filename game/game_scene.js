class GameScene {
    constructor(game) {
        this.game = game
        this.elements = []
    }

    draw() {
        for (let i = 0; i < this.elements.length; i++) {
            const element = this.elements[i]
            this.game.drawElement(element)
        }
        if (this.game.debug) {
            this.debug()
        }
    }

    addElement(image) {
        this.elements.push(image)
    }

    update() {}

    debug() {}
}
