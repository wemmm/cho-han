```
   ________             __  __               ____        __              __    _ 
  / ____/ /_  ____     / / / /___ _____     / __ )____ _/ /____  _______/ /_  (_)
 / /   / __ \/ __ \   / /_/ / __ `/ __ \   / __  / __ `/ //_/ / / / ___/ __ \/ / 
/ /___/ / / / /_/ /  / __  / /_/ / / / /  / /_/ / /_/ / ,< / /_/ / /__/ / / / /  
\____/_/ /_/\____/  /_/ /_/\__,_/_/ /_/  /_____/\__,_/_/|_|\__,_/\___/_/ /_/_/   

                      A Traditional Japanese Dice Game
                                                                                 
```

## What is this?

A JavaScript implementation of Chō Han Bakuchi. 

Two dice roll functions are executed and the results stored in an array. The results are added together, a function checks if they're odd or even and then the outcome is compared to properties set by the player, such as their bet and how many points they've wagered/ If their bet matches the outcome, they are assigned two times their wager. 

## And how do you play it?

From Wikipedia:
> The game uses two standard six-sided dice, which are shaken in a bamboo cup or bowl by a dealer. The cup is then overturned > onto the floor. Players then place their wagers on whether the sum total of numbers showing on the two dice will be "Chō" 
> (even) or "Han" (odd). The dealer then removes the cup, displaying the dice. The winners collect their money.
> The game was a mainstay of the bakuto, itinerant gamblers in old Japan, and is still played by the modern yakuza. In a 
> traditional Chou-Han setting, players sit on a tatami floor. The dealer sits in the formal seiza position and is often 
> shirtless (to prevent accusations of cheating), exposing his elaborate tattoos.

## Okay I'm in

Clone this repository to your machine, then use your browser to visit the ```index.html``` page found in the root folder. 

Click on either odd or even to make a bet on the outcome, wager some points on it (or don't!) and roll the dice to see what happens!

Winning bets are awarded double the wager amount, whereas losing bets get nothing (and lose their wagered points). 

## TODOs:
- Proper lose state 
- Images of dice to show up contextually depending on the outcome of the rollDice method

