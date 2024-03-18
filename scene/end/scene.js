class SceneEnd extends GameScene {
    constructor(game) {
        super(game)
        this.init(game)
    }

    init(game) {
        game.registerAction('r', () => {
            const s = new SceneStart(game)
            game.replaceScene(s)
        })
    }

    draw() {
        super.draw()
        const x = this.game.w / 2
        const y = this.game.h / 2
        this.game.drawText({
            font: 'Iosevka Nerd Font',
            x: x,
            y: y,
            textAlign: 'center',
            color: 'red',
            contents: [
                {
                    text: 'Game over, press ',
                    color: 'blue',
                    type: 'italic',
                    size: 32,
                },
                {
                    text: 'r ',
                    size: 36,
                    type: 'bold',
                    font: 'VictorMono Nerd Font',
                },
                {
                    text: 'to restart.',
                    color: 'green',
                    size: 32,
                },
            ],
        })
        this.game.drawText({
            x: x,
            y: y + 50,
            color: 'red',
            contents: [{
                text: 'Happy Gaming',
                font: 'Iosevka Nerd Font',
            }],
        })
    }

    update() {}

    debug() {}
}
