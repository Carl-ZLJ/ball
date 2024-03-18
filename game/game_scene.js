class GameScene {
    constructor(game) {
        this.game = game
        this.elements = []
    }

    draw() {
        for (let i = 0; i < this.elements.length; i++) {
            const element = this.elements[i]
            if (element instanceof Array) {
                element.forEach((e) => {
                    this.game.drawElement(e)
                })
            } else {
                this.game.drawElement(element)
            }
        }

        if (this.game.debug) {
            this.debug()
        }
    }

    addElement(element) {
        this.elements.push(element)
    }

    update() {}

    debug() {}
}
