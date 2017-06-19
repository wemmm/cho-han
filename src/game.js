function Game() {
  this.DEFAULT_DICE_NUMBER = 6
  this.diceArray = []
}

Game.prototype.rollTheDice = function () {
  var times = this.DEFAULT_DICE_NUMBER
  for(var i=0; i < times; i++){
    this.diceArray.push(Math.floor(Math.random() * ((6 - 1) + 1) + 1));
  }
};
