const __main = function () {
    const images = {
        ball: 'img/ballBlue.png',
        // block: 'img/block.png',
        paddle: 'img/paddleRed.png',
    }

    // As we see here, the Scene class' initialization needs the game instance,
    // likewise, the Game class also needs a scene instance to initialize
    // So here, we use a callback function, when the game instance finished it's asynchronous things,
    // call the callback function, then scene is prepared and signed to game.
    const game = new Game(50, images, (g) => {
        const scene = new Scene(g)
        g.runWithScene(scene)
    })
}

__main()
