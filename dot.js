const DOT_SIZE = 20;
var dot = function (game, row, col) {
    this.game = game;
    this.row = row;
    this.col = col;
    
    this.moveRight = function () {
        this.col++;
    }
    
    this.draw = function () {
        this.game.context.fillStyle = 'red';
        this.game.context.fillRect(this.col * DOT_SIZE + 1, this.row * DOT_SIZE + 1, DOT_SIZE - 2, DOT_SIZE - 2)
    }
}