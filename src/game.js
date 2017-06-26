function Game() {
  this.DEFAULT_DICE_NUMBER = 2
  this.diceArray = []
  this.playerBet = null
  this.playerWager = null
  this.playerPoints = 10
}

Game.prototype.rollTheDice = function () {
  if (this._checkPlayerHasMadeBet()) {
    var times = this.DEFAULT_DICE_NUMBER
    for(var i=0; i < times; i++){
      this.diceArray.push(this._diceRoll());
    }
  }
  else {
    alert("Please make a bet!");
  }
};

Game.prototype.addTheDiceUp = function () {
  var total=0;
  for(var i in this.diceArray) { total += this.diceArray[i]; }
  return total;
};

Game.prototype.oddOrEven = function () {
  if (this.addTheDiceUp() % 2 === 0)
    return "even";
  return "odd";
};

Game.prototype.makeBet = function (bet) {
  this.playerBet = bet;
};

Game.prototype.didYouWin = function () {
  if (this._checkPlayerHasMadeBet()) {
    if (this.playerBet === this.oddOrEven()) {
      this.playerPoints += (this.playerWager * 2);
      this._resetRound();
      return true;
      }
    this._resetRound();
    return false;
  }
};

Game.prototype.makeWager = function (number) {
  if (number <= this.playerPoints) {
    this.playerPoints = (this.playerPoints - number);
    this.playerWager = number;
    }
  else {
    alert("You don't have enough points!");
  }
};

Game.prototype._resetRound = function () {
  this.diceArray = [];
  this.playerBet = null;
  this.playerWager = null;
};

Game.prototype._checkPlayerHasMadeBet = function () {
  return this.playerBet != null;
};

Game.prototype._diceRoll = function () {
  return Math.floor(Math.random() * (6) + 1)
};

// TODO: Interface styling, edge case handling, lose state.
