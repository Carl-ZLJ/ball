class SceneStart extends GameScene {
    constructor(game) {
        super(game)
        this.init(game)
    }

    init(game) {
        game.registerAction('k', () => {
            const s = new SceneMain(game)
            game.replaceScene(s)
        })
    }

    draw() {
        this.game.drawText('Game over, press k to start bricking out!', 400, 300)
    }

    update() {}

    debug() {}
}
