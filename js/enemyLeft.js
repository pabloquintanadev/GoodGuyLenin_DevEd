class EnemyLeft {
    constructor(ctx, posX, posY, width, heigth) {
        this.ctx = ctx
        this.enemyLeftPos = { x: posX, y: posY }
        this.enemyLeftSize = { w: width, h: heigth }

        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = './img/player.png'
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.enemyLeftPos.x, this.enemyLeftPos.y, this.enemyLeftSize.w, this.enemyLeftSize.h)
    }

    moveRight() {

    }

    moveDown() {

    }
}