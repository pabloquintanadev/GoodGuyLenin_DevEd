class EnemyRight {
    constructor(ctx, posX, posY, width, height) {
        this.ctx = ctx
        this.enemyRightPos = { x: posX, y: posY }
        this.enemyRightSize = { w: 50, h: 50 }
        this.gameSize = { w: width, h: height }
        this.imageInstance = undefined
        this.enemyRightVel = { x: 2, y: 3 }
        this.enemyRightPhysics = { gravity: .15 }

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = './img/player.png'
    }

    draw() {
        if (this.enemyRightPos.y < (this.gameSize.h - 100 - this.enemyRightSize.h)) {
            this.ctx.drawImage(this.imageInstance, this.enemyRightPos.x, this.enemyRightPos.y, this.enemyRightSize.w, this.enemyRightSize.h)
        }
        this.moveLeft()

        this.moveDown()

    }

    moveLeft() {
        this.enemyRightPos.x -= (5 + this.enemyRightVel.x) * Math.random() * 2
    }

    moveDown() {
        this.enemyRightVel.y += this.enemyRightPhysics.gravity
        this.enemyRightPos.y += this.enemyRightVel.y
    }
}