class SceneEnd extends GameScene {
    constructor(game) {
        super(game)
        this.init(game)
    }

    init(game) {
        game.registerAction('r', () => {
            const s = new SceneMain(game)
            game.replaceScene(s)
        })
    }

    draw() {
        this.game.drawText('Game over, press r to restart.', 400, 300)
    }

    update() {}

    debug() {}
}
