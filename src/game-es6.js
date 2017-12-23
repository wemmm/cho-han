class Game {
  constructor () {
    this.DEFAULT_DICE_NUMBER = 2
    this.diceArray = []
    this.playerBet = null
    this.playerWager = null
    this.playerPoints = 10
  }

  rollTheDice () {
    if (this._checkPlayerHasMadeBet()) {
      let times = this.DEFAULT_DICE_NUMBER
      for(let i=0; i < times; i++){
        this.diceArray.push(this._diceRoll());
      }
    }
    else {
      alert("Please make a bet!");
    }
  }

  makeBet (bet) {
    this.playerBet = bet;
  }

  didYouWin () {
    if (this._checkPlayerHasMadeBet()) {
      if (this.playerBet === this._oddOrEven()) {
        this.playerPoints += (this.playerWager * 2);
        this._resetRound();
        return true;
        }
      this._resetRound();
      return false;
    }
  }

  makeWager (number) {
    if (number <= this.playerPoints) {
      this.playerPoints = (this.playerPoints - number);
      this.playerWager = number;
      }
    else {
      alert("You don't have enough points!");
    }
  }

  reportWinStatus () {
    this.didYouWin() ? "You win!" : "You lose!";
  }

  _oddOrEven () {
    if (this._addTheDiceUp() % 2 === 0) { return "even" }
    else { return "odd" }
  }

  _addTheDiceUp () {
    let total=0;
    for(let i in this.diceArray) { total += this.diceArray[i]; }
    return total;
  }

  _resetRound () {
    this.diceArray = [];
    this.playerBet = null;
    this.playerWager = null;
  }

  _checkPlayerHasMadeBet () {
    return this.playerBet != null;
  }

  _diceRoll () {
    return Math.floor(Math.random() * (6) + 1)
  }
}
