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
    bulletsArr: [],
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
                this.shoot()

            }
        })
    },

    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            // this.generateEnemyRight()
            this.generateEnemy()
            this.generateShootBonus()
            this.generateClearBonus()


            console.log(this.enemyArray)
            console.log(this.bulletsArr)

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
        this.bulletsArr.forEach(bullet => { bullet.draw() });
        this.clearEnemies()
        this.clearBullets()
    },

    drawBackground() {
        this.ctx.fillStyle = 'blue'
        this.ctx.fillRect(0, 0, 200, this.gameSize.h)
        this.ctx.fillRect(this.gameSize.w - 200, 0, 200, this.gameSize.h)

    },

    createPlayer() {
        this.player = new Player(this.ctx, this.gameSize.w / 2 - 40, this.gameSize.h / 2 - 40, 80, 80)
        this.player.draw()
    },

    generateEnemy() {
        if (this.framesIndex % 10 === 0) {
            this.enemyArray.push(new Enemy(this.ctx, Math.random() * (this.gameSize.w - 550) + 250, 100, 50, 50))
        }
    },

    clearEnemies() {
        this.enemyArray = this.enemyArray.filter(enemy => enemy.enemyPos.y < this.gameSize.h)
    },

    clearBullets() {
        this.bulletsArr = this.bulletsArr.filter(bullet => bullet.bulletPos.y > 0 - bullet.bulletSize.h)

    },

    generateShootBonus() {
        if (this.framesIndex % 123 === 0) {
            this.shootBonusArr.push(new ShootBonus(this.ctx, Math.random() * (this.gameSize.w - 550) + 250, Math.random() * (this.gameSize.h - 400) + 400))
        }
    },
    generateClearBonus() {
        if (this.framesIndex % 201 === 0) {
            this.clearBonusArr.push(new ClearBonus(this.ctx, Math.random() * (this.gameSize.w - 550) + 250, Math.random() * (this.gameSize.h - 400) + 280))
        }
    },

    shoot() {
        this.bulletsArr.push(new Bullet(this.ctx, this.player.playerPos.x, this.player.playerPos.y, 50, 50))
    }

    // generateBonus() {
    //     if (this.framesIndex % 30000 === 0) {
    //         if (Math.floor(Math.random()) * 1 < 1)
    //             this.clearBonusArr.push(new ClearBonus(this.ctx, Math.random() * (this.gameSize.w - 550) + 250, Math.random() * (this.gameSize.h - 280) + 280))
    //         console.log('if')
    //     } else {
    //         this.shootBonusArr.push(new ShootBonus(this.ctx, Math.random() * (this.gameSize.w - 550) + 250, Math.random() * (this.gameSize.h - 280) + 280))
    //         console.log('else')
    //     }
    // }

    // generateEnemyRight() {
    //     if (this.framesIndex % 150 === 0) {
    //         this.enemyRight.push(new EnemyRight(this.ctx, this.gameSize.w, 50, this.gameSize.w, this.gameSize.h))
    //     }
    // }



}