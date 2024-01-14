class Blob {    
    constructor(el) {   
        this.el = el
        this.size = el.getBoundingClientReact().width
        this.x = 0
        this.y = 0
        this.volocityX = 1
        this.volocityY = 1 
    }

    update() {  
        this.x += this.volocityX
        this.y += this.volocityY

        if (this.x >= window.innerWidth - this.size) {    
            this.volocityX *= -1
            this.x = window.innerWidth - this.size
        }

        if (this.y >= window.innerWidth - this.size) {
            this.volocityY *= -1
            this.y = window.innerWidth - this.size
        }
    }

    move() {    
        this.el.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
}

function initBlobs() {  
    const blobEls = document.querySelectorAll('.blob')
     const blobs = Array.from(blobEls).map((blobEl) => new Blob(blobEl))

function update () {    
   blobs.forEach((blob) => {
    blob.update()
    blob.move()
   })

    requestAnimationFrame(update)
    }

    requestAnimationFrame(update)
}

initBlobs()

