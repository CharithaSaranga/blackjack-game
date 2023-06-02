# Blackjack Game

This is a simple Blackjack game implemented using HTML, CSS, and JavaScript. The game allows players to play rounds of Blackjack by drawing cards and attempting to reach a sum of 21 without exceeding it. The game provides feedback and updates the player on their current hand and the game status.

## How to Play

1. Open the `index.html` file in a web browser.
2. Click the "START GAME" button to begin a new round.
3. The game will draw two initial cards for the player and display their sum.
4. If the sum is less than or equal to 20, the game will prompt the player to draw another card by clicking the "NEW CARD" button.
5. The player can draw additional cards until they reach a sum of 21 or decide to stop.
6. If the sum exceeds 21, the player loses the round.
7. If the sum equals 21, the player wins with a Blackjack.
8. To play another round, click the "START GAME" button again.

## Features

- The game uses a deck of cards, represented by numbers from 1 to 13.
- Cards from 1 to 10 have their face value, while face cards (11, 12, 13) are worth 10.
- The player's hand is displayed, showing all the cards they have drawn.
- The sum of the player's cards is shown on the screen.
- If the player's sum is less than or equal to 20, they are prompted to draw another card.
- The game checks for a Blackjack (sum equals 21) and ends the round if the player achieves it.
- If the player's sum exceeds 21, they lose the round.

## Customize the Game

You can modify the game by making changes to the JavaScript code (`index.js`) and the CSS styles (`index.css`) as needed. Here are some possible enhancements or modifications:

- Change the background image of the game table by replacing the `table.png` file in the project folder.
- Adjust the styles in the CSS file to match your preferred visual theme.
- Customize the messages displayed to the player by modifying the logic in the `renderGame()` function.
- Add multiplayer functionality by implementing a dealer's hand and allowing multiple players to take turns.
- Implement a scoring system to track the player's wins, losses, and chips.

Feel free to explore and make the game your own!

## Author

This game was developed by [Charitha Saranga].
