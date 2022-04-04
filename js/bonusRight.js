class BonusRight {
    constructor(ctx, posX, posY, width, heigth) {
        this.ctx = ctx
        this.bonusRightPos = { x: posX, y: posY }
        this.bonusRightSize = { w: width, h: heigth }

        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = './img/player.png'
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.bonusRightPos.x, this.bonusRightPos.y, this.bonusRightSize.w, this.bonusRightSize.h)
    }

    moveLeft() {

    }

    moveDown() {

    }
}