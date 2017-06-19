'use strict';

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('has an empty array for dice scores', function(){
    expect(game.diceArray).toEqual([])
  });

  it('uses six dice by default', function(){
    expect(game.DEFAULT_DICE_NUMBER).toEqual(6)
  });

  it('rolls a dice six times and stores the result', function(){
    game.rollTheDice();
    expect(game.diceArray.length).toEqual(6)
  });
})
