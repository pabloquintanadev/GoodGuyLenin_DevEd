class Bullet {
    constructor(ctx, posX, posY, width, heigth) {
        this.ctx = ctx
        this.bulletPos = { x: posX, y: posY }
        this.bulletSize = { w: width, h: heigth }

        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = './img/transparent-pile-of-poo-emoji-emoji-icon-smiley-defecation-60d30bda7b8f59.5151467416244438665061.jpg'
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.bulletPos.x, this.bulletPos.y, this.bulletSize.w, this.bulletSize.h)
        this.moveUp()
    }

    moveUp() {
        this.bulletPos.y -= 20
    }
}