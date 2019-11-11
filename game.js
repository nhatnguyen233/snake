const NUM_ROWS = 15;
const NUM_COLS = 20;
const WIDTH = 400;
const HEIGHT = 300;
var game = function () {
    this.canvas = null;
    this.context = null;
    this.snake = null;
    this.food = null;
    this.perFrame = 100;
    var self = this;
    this.init = function () {
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = WIDTH;
        this.canvas.height = HEIGHT;

        // create snake
        this.snake = new snake(this);
        this.snake.init();
        
        // Create food 
        this.food = new food(this);
        this.food.draw();


        document.body.appendChild(this.canvas);

        this.listenerEvent();
        this.loop();
    }

    this.loop = function () {
        self.clearScreen();
        self.snake.go();
        self.snake.eat();
        var element = document.getElementById('score');
        element.innerHTML = self.snake.score;
        self.snake.draw();
        self.snake.gameOver();
        console.log('draw');
        self.food.draw();
        console.log('eat');
        

        console.log('HIHI');
        setTimeout(self.loop, self.perFrame);
    }

    this.listenerEvent = function () {
        document.addEventListener('keydown', function(event) {
            console.log(event.keyCode);
            switch(event.keyCode) {
                case 40: 
                    if(self.snake.direction != 'up') {
                        self.snake.direction = 'down';
                    }
                break;
                case 39: 
                    if(self.snake.direction != 'left') {
                        self.snake.direction = 'right';
                    }
                break;
                case 37: 
                    if(self.snake.direction != 'right') {
                        self.snake.direction = 'left';
                    }
                break;
                case 38: 
                    if(self.snake.direction != 'down') {
                        self.snake.direction = 'up';
                    }
                break;
            }
        });
    }

    this.clearScreen = function () {
        this.context.fillStyle = '#000000';
        this.context.fillRect(0, 0, WIDTH, HEIGHT)
    }

    this.gameOver = function () {
        this.snake = new snake(this);
        this.snake.init();
        this.perFrame = 1000;
    }

    this.score = function () {
        var count = 0;
        if(self.snake.eat()) {
            count++;
        }
        return count;
    }
}

var g = new game();
g.init();   
