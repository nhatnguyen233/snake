
var food = function (game) {
    this.game = game;
    this.dots = [];
    this.col = 4;
    this.row = 4;

    this.draw = function () {
        this.game.context.fillStyle = 'yellow';
        var head = this.game.snake.dots[this.game.snake.dots.length -2];
        if (head.row == this.row && head.col == this.col) {
            this.col = Math.floor((Math.random() * 20));
            this.row = Math.floor((Math.random() * 15));
            this.game.context.fillRect(this.col * DOT_SIZE, this.row * DOT_SIZE, DOT_SIZE - 2, DOT_SIZE - 2);
        } else {
            this.game.context.fillRect(this.col * DOT_SIZE, this.row * DOT_SIZE, DOT_SIZE - 2, DOT_SIZE - 2);
        }
        console.log(this.col, this.row);

    }
}