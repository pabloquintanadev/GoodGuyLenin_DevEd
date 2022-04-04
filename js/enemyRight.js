class EnemyRight {
    constructor(ctx, posX, posY) {
        this.ctx = ctx
        this.enemyRightPos = { x: posX, y: posY }
        this.enemyRightSize = { w: 50, h: 50 }

        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = './img/player.png'
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.enemyRightPos.x, this.enemyRightPos.y, this.enemyRightSize.w, this.enemyRightSize.h)
        this.moveLeft()
    }

    moveLeft() {
        this.enemyRightPos.x -= 20
    }

    moveDown() {

    }
}