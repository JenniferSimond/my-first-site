class Blob {    
    constructor(el) {   
        this.el = el
        this.x = 0
        this.y = 0
        this.volocityX = 1
        this.volocityY = 1 
        console.log(el)
    }

    update() {  
        this.x += this.volocityX
        this.y += this.volocityY
    }

    move() {    
        this.el.style.transform = `translate({$this.x}px, ${this.y}px)`
    }
}

function initBlobs() {  
    const blobEls = document.querySelectorAll('.blob')
    const blobs = Array.from(blobEls).map(blobEls => new Blob(blobEls))

function update () {    
    console.log('tick')

    requestAnimationFrame(update)
    }

    requestAnimationFrame(update)
}

initBlobs()

