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
        super.draw()
        const x = this.game.w / 2
        const y = this.game.h / 2
        this.game.drawText({
            x: x,
            y: y,
            color: 'blue',
            contents: [
                {
                    text: 'Press ',
                    font: 'Iosevka Nerd Font',
                },
                {
                    text: 'k ',
                    font: 'VictorMono Nerd Font',
                    color: 'red',
                    size: 36,
                },
                {
                    text: 'to start bricking out! ',
                    font: 'Iosevka Nerd Font',
                },
            ],
        })
        this.game.drawText({
            x: x,
            y: y + 50,
            color: 'blue',
            textAlign: 'center',
            contents: [
                {
                    text: 'Happy Gaming',
                },
            ],
            font: 'VictorMono Nerd Font',
        })
    }

    update() {}

    debug() {}
}
