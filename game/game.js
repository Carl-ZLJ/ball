class Game {
    constructor(fps = 60, images, runCallback) {
        this.actions = {}
        this.keydowns = {}
        this.scene = null
        this.runCallback = runCallback
        this.images = images
        this.fps = fps

        this.initCanvas()
        this.bindEvents()
        this.init()
    }

    initCanvas() {
        let canvas = document.querySelector('#id-canvas')
        let context = canvas.getContext('2d')

        this.canvas = canvas
        this.context = context
        this.h = this.canvas.height
        this.w = this.canvas.width
    }

    bindEvents() {
        window.addEventListener('keydown', (event) => {
            this.keydowns[event.key] = true
        })

        window.addEventListener('keyup', (event) => {
            this.keydowns[event.key] = false
        })
    }

    registerAction(key, callback) {
        this.actions[key] = callback
    }

    drawImage(pic) {
        this.context.drawImage(pic.image, pic.x, pic.y)
    }

    draw() {
        this.scene.draw()
    }

    update() {
        this.scene.update()
    }

    runloop() {
        // events
        let actions = Object.keys(this.actions)
        for (let i = 0; i < actions.length; i++) {
            let key = actions[i]
            if (this.keydowns[key]) {
                this.actions[key]()
            }
        }

        // update
        this.update()

        // clear
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

        // draw
        this.draw()

        setTimeout(() => this.runloop(), 1000 / this.fps)
    }

    runWithScene(scene) {
        this.scene = scene
        this.runloop()
    }

    __start() {
        this.runCallback(this)
    }

    loadImages() {
        const loaded = []
        const names = Object.keys(this.images)
        for (let i = 0; i < names.length; i++) {
            const name = names[i]
            const path = this.images[name]
            const img = new Image()
            img.src = path
            img.onload = () => {
                this.images[name] = img
                loaded.push(1)
                if (loaded.length == names.length) {
                    this.__start()
                }
            }
        }
    }

    imageByName(name) {
        const img = this.images[name]
        const image = {
            image: img,
            w: img.width,
            h: img.height,
        }

        return image
    }

    init() {
        this.loadImages()
    }

    replaceScene(scene) {
        this.scene = scene
    }
}
