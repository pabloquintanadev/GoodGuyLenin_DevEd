const ironApp = {
    name: 'Iron App',
    description: '---',
    version: '1.0.0',
    author: 'Pablo & Roberto',
    license: undefined,
    canvasNode: undefined,
    ctx: undefined,
    gameSize: { w: undefined, h: undefined },
    framesIndex: 0,
    enemyArray: [],
    shootBonusArr: [],
    clearBonusArr: [],
    // enemyRight: [],
    // enemyLeft: [],


    init(canvasID) {
        this.canvasNode = document.querySelector(`#${canvasID}`)
        this.ctx = this.canvasNode.getContext('2d')
        console.log('EL CONTEXTO:', this.ctx)

        this.setDimensions()
        this.drawBackground()
        this.start()
        this.createPlayer()
        this.setEventListeners()

    },

    setDimensions() {
        this.gameSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        this.canvasNode.setAttribute('width', this.gameSize.w)
        this.canvasNode.setAttribute('height', this.gameSize.h)
    },

    setEventListeners() {
        document.addEventListener('keydown', event => {
            const { key } = event
            if (key === 'ArrowLeft' && this.player.playerPos.x > 250) {
                this.player.moveLeft()
            }
            if (key === 'ArrowRight' && this.player.playerPos.x < this.gameSize.w - 250 - this.player.playerSize.w) {
                this.player.moveRight()
            }
            if (key === 'ArrowUp' && this.player.playerPos.y > 160) {
                this.player.moveUp()
            }
            if (key === 'ArrowDown' && this.player.playerPos.y < this.gameSize.h - 120 - this.player.playerSize.h) {
                this.player.moveDown()
            }
            if (event.code === 'Space') {
                this.player.shoot()
            }
        })
    },

    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            // this.generateEnemyRight()
            this.generateEnemy()
            this.generateBonus()


            console.log(this.enemyArray)

            this.framesIndex++
        }, 30);
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },

    drawAll() {
        this.drawBackground()
        this.player.draw()
        this.enemyArray.forEach(enemy => enemy.draw())
        this.shootBonusArr.forEach(bonus => bonus.draw());
        this.clearBonusArr.forEach(bonus => bonus.draw())
    },

    drawBackground() {
        this.ctx.fillStyle = 'blue'
        this.ctx.fillRect(0, 180, 250, this.gameSize.h - 180)
        this.ctx.fillRect(this.gameSize.w - 250, 180, 250, this.gameSize.h - 180)
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, this.gameSize.h - 100, this.gameSize.w, 100)
    },

    createPlayer() {
        this.player = new Player(this.ctx, this.gameSize.w / 2 - 40, this.gameSize.h / 2 - 40, 80, 80)
        this.player.draw()
    },

    generateEnemy() {
        if (this.framesIndex % 5 === 0) {
            this.enemyArray.push(new Enemy(this.ctx, Math.random() * (this.gameSize.w - 550) + 250, 100, 50, 50))
        }
    },
    // generateShootBonus() {
    //     if (this.framesIndex % 300 === 0) {
    //         this.shootBonusArr.push(new ShootBonus(this.ctx, Math.random() * (this.gameSize.w - 550) + 250, Math.random() * (this.gameSize.h - 280) + 280))
    //     }
    // },
    // generateClearBonus() {
    //     if (this.framesIndex % 300 === 0) {
    //         this.clearBonusArr.push(new ClearBonus(this.ctx, Math.random() * (this.gameSize.w - 550) + 250, Math.random() * (this.gameSize.h - 280) + 280))
    //     }
    // }

    generateBonus() {
        if (this.framesIndex % 30000 === 0) {
            if (Math.floor(Math.random()) * 1 < 1)
                this.clearBonusArr.push(new ClearBonus(this.ctx, Math.random() * (this.gameSize.w - 550) + 250, Math.random() * (this.gameSize.h - 280) + 280))
            console.log('if')
        } else {
            this.shootBonusArr.push(new ShootBonus(this.ctx, Math.random() * (this.gameSize.w - 550) + 250, Math.random() * (this.gameSize.h - 280) + 280))
            console.log('else')
        }
    }
}
// generateEnemyRight() {
    //     if (this.framesIndex % 150 === 0) {
    //         this.enemyRight.push(new EnemyRight(this.ctx, this.gameSize.w, 50, this.gameSize.w, this.gameSize.h))
    //     }
    // }