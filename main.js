const __main = function () {
    const paddlePoints = [
        [12, 0],
        [22, 0],
        [82, 0],
        [92, 0],
        [104, 12],
        [92, 24],
        [82, 24],
        [22, 24],
        [12, 24],
        [0, 12],
    ]
    const brickPoints = [
        [0, 0],
        [64, 0],
        [64, 32],
        [0, 32],
    ]
    const ballPoints = [
        [11, 0],
        [11 + 11 * Math.cos(Math.PI / 4), 11 - 11 * Math.sin(Math.PI / 4)],
        [22, 11],
        [11 + 11 * Math.cos(Math.PI / 4), 11 + 11 * Math.sin(Math.PI / 4)],
        [11, 22],
        [11 - 11 * Math.cos(Math.PI / 4), 11 + 11 * Math.sin(Math.PI / 4)],
        [0, 11],
        [11 - 11 * Math.cos(Math.PI / 4), 11 - 11 * Math.sin(Math.PI / 4)],
    ]

    const images = {
        ball: {
            path: 'img/ballBlue.png',
            points: ballPoints,
        },
        brick: {
            path: 'img/element_purple_rectangle.png',
            points: brickPoints,
        },
        paddle: {
            path: 'img/paddleRed.png',
            points: paddlePoints,
        }
    }

    // As we see here, the Scene class' initialization needs the game instance,
    // likewise, the Game class also needs a scene instance to initialize
    // So here, we use a callback function, when the game instance finished it's asynchronous things,
    // call the callback function, then scene is prepared and signed to game.
    const game = new Game(30, images, (g) => {
        const scene = new SceneEnd(g)
        g.runWithScene(scene)
    })

    enableDebugMode(game, true)
}

function enableDebugMode(game, enable) {
    if (!enable) {
        return
    }

    window.addEventListener('keyup', e => {
        const k = e.key
        if (k == 'p') {
            game.debug = !game.debug
        }
    })

    e('#id-fps').addEventListener('input', event => {
        log(event.target.value)
        const value = event.target.value
        game.fps = Number(value)
    })
}

__main()
