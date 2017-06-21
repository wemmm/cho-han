function Game() {
  this.DEFAULT_DICE_NUMBER = 2
  this.diceArray = []
  this.playerBet = null
  this.playerWager = null
  this.playerPoints = 10
}

Game.prototype.rollTheDice = function () {
  var times = this.DEFAULT_DICE_NUMBER
  for(var i=0; i < times; i++){
    this.diceArray.push(Math.floor(Math.random() * ((6 - 1) + 1) + 1));
  }
};

Game.prototype.addTheDiceUp = function () {
  var total=0;
  for(var i in this.diceArray) { total += this.diceArray[i]; }
  return total;
};

Game.prototype.oddOrEven = function () {
  if (this.addTheDiceUp() % 2 == 0)
    return "even";
  return "odd";
};

Game.prototype.makeBet = function (bet) {
  this.playerBet = bet;
};

Game.prototype.didYouWin = function () {
  if (this.playerBet === this.oddOrEven()) {
    this.playerPoints += (this.playerWager * 2)
    this._resetRound();
    return true;
    }
  this._resetRound();
  return false;
};

Game.prototype.makeWager = function (number) {
  this.playerPoints -= number;
  this.playerWager = number;
};

Game.prototype._resetRound = function () {
  this.diceArray = [];
  this.playerBet = null;
  this.playerWager = null;
};

// TODO: Interface, edge case handling.
