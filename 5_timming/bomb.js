function Bomb() {
    this.message = 'Boom!';
}

Bomb.prototype.explode = function() {
    console.log(this.message);
}

var bomb = new Bomb();

// 1 sec delay
var timeoutId = setTimeout(bomb.explode.bind(bomb), 1000);

// This disable the bomb before exploting!!
clearTimeout(timeoutId);