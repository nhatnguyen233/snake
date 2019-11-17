var snake = function (game) {
    this.game = game;
    this.dots = [];
    this.direction = 'right';
    this.food = null;
    this.score = 0;
    this.init = function () {
        this.createDot();
        this.gameOver();
    }

    this.createDot = function () {
        var newDot1 = new dot(this.game, 0, 0);
        newDot1.init();
        this.dots.push(newDot1);
        var newDot2 = new dot(this.game, 0, 1);
        newDot2.init();
        this.dots.push(newDot2);
        var newDot3 = new dot(this.game, 0, 2);
        newDot3.init();
        this.dots.push(newDot3);
    }

    this.go = function () {
        switch(this.direction) {
            case 'right':
                this.moveRight();
            break;
            case 'left':
                this.moveLeft();
            break;
            case 'down':
                this.moveDown();
            break;
            case 'up':
                this.moveUp();
            break;
        }
    }

    this.canMoveRight = function () {
        var head = this.dots[this.dots.length - 1];
        return (head.col < NUM_COLS - 1);
    }

    this.moveRight = function () {
        if(this.canMoveRight() && this.direction == 'right') {
            var head = this.dots[this.dots.length - 1];
            var newDot = new dot(this.game, head.row, head.col + 1);
            this.dots.push(newDot);
            this.dots.shift();
        }
    }

    this.canMoveLeft = function () {
        var head = this.dots[this.dots.length - 1];
        return (head.col > 0);
    }

    this.moveLeft = function () {
        if(this.canMoveLeft()) {
            var head = this.dots[this.dots.length - 1];
            var newDot = new dot(this.game, head.row, head.col - 1);
            this.dots.push(newDot);
            this.dots.shift();
        }
    }

    this.canMoveDown = function () {
        var head = this.dots[this.dots.length - 1];
        return (head.row < NUM_ROWS - 1);
    }

    this.moveDown = function () {
        if(this.canMoveDown() && this.direction != 'up') {
            var head = this.dots[this.dots.length - 1];
            var newDot = new dot(this.game, head.row + 1, head.col);
            this.dots.push(newDot);
            this.dots.shift();
        }
    }

    this.canMoveUp = function () {
        var head = this.dots[this.dots.length - 1];
        return (head.row > 0);
    }
        
    this.moveUp = function () {
        if(this.canMoveUp()) {
            this.direction = 'up';
            var head = this.dots[this.dots.length - 1];
            var newDot = new dot(this.game, head.row - 1, head.col);
            this.dots.push(newDot);
            this.dots.shift();
            return true;
        }
    }

    this.eat = function () {
        this.game.context.fillStyle = 'red';
        var head = this.dots[this.dots.length - 1];
        console.log('snake',head);
        if (head.row == this.game.food.row && head.col == this.game.food.col) {
            switch(this.direction) {
                case 'right':
                    var newDot = new dot(this.game, head.row, head.col + 1);
                    this.dots.push(newDot);
                    this.score++;
                break;
                case 'left':
                    var newDot = new dot(this.game, head.row, head.col - 1);
                    this.dots.push(newDot);
                    this.score++;
                break;
                case 'down':
                    var newDot = new dot(this.game, head.row + 1, head.col);
                    this.dots.push(newDot);
                    this.score++;
                break;
                case 'up':
                    var newDot = new dot(this.game, head.row - 1, head.col);
                    this.dots.push(newDot);
                    this.score++;
                break;
            }
        } else {
            this.game.context.fillRect(this.col * DOT_SIZE, this.row * DOT_SIZE, DOT_SIZE - 2, DOT_SIZE - 2);
        }
    }

    this.gameOver = function () {
        var head = this.dots[this.dots.length - 1];
        for(var i=1; i <= (this.dots.length - 3); i++) {
            if(head.row == this.dots[i].row && head.col == this.dots[i].col) {
                var element = document.getElementById('lose');
                element.innerHTML = "Game over";
            }
        }
    }

    this.draw = function () {
        this.dots.forEach(function(dot){
            dot.draw();
        });
    }
}