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
        this.game.drawText({
            font: 'Iosevka Nerd Font',
            x: 400,
            y: 300,
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
            x: 400,
            y: 350,
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
