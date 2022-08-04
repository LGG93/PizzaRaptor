Pizza Raptor Game (Project 1 Bootcamp Ironhack)

Description
It is based on a side game from the game Pou, an old Android game. It has 3 screens : the starting screen with instructions option, main game and a game Over
screen with the option to restart the game.

MVP (DOM - CANVAS)
The game is a little dinosaur that moves from left to rigth within the canvas width.
Getting food items falling from the sky adds points to you score board.
If you get any objects items they will add points to the missed board.
After 3 objects you reach the game over screen.
Character changes position depending on the desired direction.
Speed increases every 5 food items taken.

Data Structure

Game js.

INTRO GAME
-window.onload () {}
-instructions button
-closing instructions
-Music button
-Start Game button

STARTING THE GAME
-startGame () {}
-buildGameOverScreen () {}
-canvas display
-canvas draw
-character display
-score display
-Elements set up
-for loop() {} -> Speed of objects increases
-music .play() .pause()

MOVEMENT
-Character Movement
-addEventListener('keydown', event) => {}

OBSTACLES
-Obstacles display and appear randomly
-new Image ()
-Math.floor(Math.random)
-Differece between objects and food (Boolean)

GAME OVER
-gameOver() {}
-Game Over screen display CSS
-Score display
-Restart button
-restart() {}

RESTARTING THE GAME
-Restart(){}
-Elements set up to original display
-Score set up back to 0
-startGame() {}



Git
URls for the project repo.
https://github.com/LGG93/PizzaRaptor/tree/main
and deploy Link Repo Link Deploy:

Slides
URls for the project presentation (slides)
