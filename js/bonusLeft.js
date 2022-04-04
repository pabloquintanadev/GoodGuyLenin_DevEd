class BonusLeft {
    constructor(ctx, posX, posY, width, heigth) {
        this.ctx = ctx
        this.bonusLeftPos = { x: posX, y: posY }
        this.bonusLeftSize = { w: width, h: heigth }

        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = './img/player.png'
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.bonusLeftPos.x, this.bonusLeftPos.y, this.bonusLeftSize.w, this.bonusLeftSize.h)
    }

    moveRight() {

    }

    moveDown() {

    }
}