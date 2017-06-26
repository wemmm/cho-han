$(document).ready(function() {
  $("#images").hide();
  var game = new Game;

  $('#player_bet').text(game.playerBet)

  $('#player_points').text(game.playerPoints)

  $('#odd_bet').on('click', function() {
    game.makeBet("odd")
    $('#player_bet').text(game.playerBet)
  })

  $('#even_bet').on('click', function() {
    game.makeBet("even")
    $('#player_bet').text(game.playerBet)
  })

  $('#make_wager').on('click', function() {
    game.makeWager($("#wager_amount").val())
    $('#player_wager').text(game.playerWager)
    $('#player_points').text(game.playerPoints)
  })

  $('#roll_the_dice').on('click', function() {
    game.rollTheDice();
    $('#dice_array').text(game.diceArray)
    $('#win_status').text(game.didYouWin())
    $('#player_bet').text(game.playerBet)
    $('#player_wager').text(game.playerWager)
    $('#player_points').text(game.playerPoints)
    $('#diceimage1').show();
  })

})
