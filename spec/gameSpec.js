'use strict';

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('has an empty array for dice scores', function(){
    expect(game.diceArray).toEqual([])
  });

  it('uses two dice by default', function(){
    expect(game.DEFAULT_DICE_NUMBER).toEqual(2)
  });

  it('rolls two dice and stores the result', function(){
    game.makeBet("odd");
    game.rollTheDice();
    expect(game.diceArray.length).toEqual(2)
  });

  it('can get the total score from the dice array', function(){
    game.diceArray = [3, 4]
    expect(game._addTheDiceUp()).toEqual(7)
  });

  it('can assess whether dice totals are even', function(){
    game.diceArray = [3, 4, 1, 3, 6, 5]
    expect(game._oddOrEven()).toEqual("even")
  });

  it('can assess whether dice totals are odd', function(){
    game.diceArray = [3, 4, 1, 3, 6, 4]
    expect(game._oddOrEven()).toEqual("odd")
  });

  it('takes a bet from the player', function(){
    game.makeBet("even");
    expect(game.playerBet).toEqual("even")
  });

  it('can assess whether the player won a bet', function(){
    game.diceArray = [3, 4]
    game.makeBet("odd");
    expect(game.didYouWin()).toEqual(true)
  });

  it('can assess whether the player lost a bet', function(){
    game.diceArray = [3, 4]
    game.makeBet("even");
    expect(game.didYouWin()).toEqual(false)
  });

  it('knows that the player has a quantity of points', function(){
    expect(game.playerPoints).toBeDefined()
  });

  it('allows a player to wager points on a bet', function(){
    game.makeWager(5);
    expect(game.playerPoints).toEqual(5)
  });

  xit('does not allow a player to bet more points than they have', function() {
    game.makeWager(11);
    expect(game.playerPoints).toEqual(10);
    expect(game.playerWager).toEqual(null)
  })

  it('returns two times the wager if player wins a bet', function(){
    game.makeWager(5);
    game.diceArray = [3, 4]
    game.makeBet("odd");
    game.didYouWin();
    expect(game.playerPoints).toEqual(15)
  });

  it('can reset wagers, bets and dice arrays after a round', function(){
    game.makeWager(5);
    game.diceArray = [3, 4];
    game.makeBet("odd");
    game.didYouWin();
    expect(game.diceArray).toEqual([]);
    expect(game.playerBet).toEqual(null);
    expect(game.playerWager).toEqual(null);
  });

  xit('only allows dice to be rolled if player has entered a bet', function(){
    game.rollTheDice();
    expect(game.diceArray).toEqual([])
  });

  it('can report dice rolls and win status in a readable way', function(){
    game.makeWager(5);
    game.diceArray = [3, 4];
    game.makeBet("odd");
    game.didYouWin();
    expect(game.reportWinStatus()).toEqual("You win! The dice total was 7, and you win 10 points.")
  });

})
