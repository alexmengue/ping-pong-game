const canvasElement = document.querySelector('canvas');
const canvasContext = canvasElement.getContext('2d');

const gapX = 10;

const mouse = { x: 0, y: 0 };

const field = {
    width: window.innerWidth,
    height: window.innerHeight,

    draw: function() {
        canvasContext.fillStyle = '#286047';
        canvasContext.fillRect(0, 0, this.width, this.height);
    }
};

const line = {
    width: 15,
    height: field.height,

    draw: function() {
        canvasContext.fillStyle = '#FFFFFF';
        canvasContext.fillRect(field.width / 2 - this.width / 2, 0, this.width, this.height);
    }
};

const leftRacket = {
    x: gapX,
    y: field.height / 2,
    width: line.width,
    height: 200,

    _move: function() {
        this.y = mouse.y;
    },

    draw: function() {
        canvasContext.fillStyle = '#FFFFFF';
        canvasContext.fillRect(this.x, this.y, this.width, this.height);

        this._move();
    }
};

const rightRacket = {
    x: field.width - line.width - gapX,
    y: field.height / 2,
    width: line.width,
    height: 200,

    _move: function() {
        this.y = ball.y;
    },

    draw: function() {
        canvasContext.fillStyle = '#FFFFFF';
        canvasContext.fillRect(this.x, this.y, this.width, this.height);

        this._move();
    }
};

const ball = {
    x: field.width / 6,
    y: field.height / 2,
    radius: 20,
    speed: 2,
    directionX: 1,
    directionY: 1,

    _calculatePosition: function() {
        if (this.x > field.width - this.radius - rightRacket.width - gapX) {
            if (this.y + this.radius > rightRacket.y && this.y - this.radius < rightRacket.y + rightRacket.height) {
                this._reverseX();
            } else {

            }
        }

        if (this.x < this.radius + leftRacket.width + gapX) {
            if (this.y + this.radius > leftRacket.y && this.y - this.radius < leftRacket.y + leftRacket.height) {
                this._reverseX();
            } else {

            }
        }



        if ((this.x - this.radius < 0 && this.directionX < 0) || (this.x > field.width - this.radius && this.directionX > 0)) {
            this._reverseX();
        }
        
        if ((this.y - this.radius < 0 && this.directionY < 0) || (this.y > field.height - this.radius && this.directionY > 0)) {
            this._reverseY();
        }
    },

    _reverseX: function() {
        this.directionX *= -1;
    },

    _reverseY: function() {
        this.directionY *= -1;
    },

    _move: function() {
        this.x += this.directionX * this.speed;
        this.y += this.directionY * this.speed;
    },

    draw: function() {
        canvasContext.fillStyle = '#FFFFFF';
        canvasContext.beginPath();
        canvasContext.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        canvasContext.fill();

        this._calculatePosition();
        this._move();
    }
};

function setup() {
    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight;

    canvasContext.width = window.innerWidth;
    canvasContext.height = window.innerHeight;
}

function draw() {
    field.draw();
    line.draw();

    leftRacket.draw();
    rightRacket.draw();
    
    ball.draw();
}

window.animateFrame = (function() {
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback) {
                return window.setTimeout(callback, 1000 / 60)
            }
        )
    }) ()

    function main() {
        animateFrame(main);
        draw();
    }

    setup();
    main();

    canvasElement.addEventListener('mousemove', (event) => {
        mouse.x = event.pageX;
        mouse.y = event.pageY;
    })