class Player {
    constructor(ctx, posX, posY, width, heigth) {
        this.ctx = ctx
        this.playerPos = { x: posX, y: posY }
        this.playerSize = { w: width, h: heigth }

        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = './img/player.png'
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h)
    }

    moveLeft() {
        this.playerPos.x -= 20
    }

    moveRight() {
        this.playerPos.x += 20
    }

    moveUp() {
        this.playerPos.y -= 20
    }

    moveDown() {
        this.playerPos.y += 20
    }
}