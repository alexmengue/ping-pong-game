const canvasElement = document.querySelector('canvas');
const canvasContext = canvasElement.getContext('2d');

const gapX = 10;

const field = {
    width: window.innerWidth,
    height: window.innerHeight,
    draw: function() {
        canvasContext.fillStyle = '#286047';
        canvasContext.fillRect(0, 0, this.width, this.height);
    }
}

const line = {
    width: 15,
    height: field.height,
    draw: function() {
        canvasContext.fillStyle = '#FFFFFF';
        canvasContext.fillRect(field.width / 2 - this.width / 2, 0, this.width, this.height);
    }
}

const leftRacket = {
    x: gapX,
    y: 240,
    width: line.width,
    height: 200,
    draw: function() {
        canvasContext.fillStyle = '#FFFFFF';
        canvasContext.fillRect(this.x, this.y, this.width, this.height);
    }
}

const rightRacket = {
    x: field.width - line.width - gapX,
    y: 600,
    width: line.width,
    height: 200,
    draw: function() {
        canvasContext.fillStyle = '#FFFFFF';
        canvasContext.fillRect(this.x, this.y, this.width, this.height);
    }
}

const ball = {
    x: 120,
    y: 240,
    radius: 20,
    draw: function() {
        canvasContext.fillStyle = '#FFFFFF';
        canvasContext.beginPath();
        canvasContext.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        canvasContext.fill();
    }
}

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

setup();
draw();