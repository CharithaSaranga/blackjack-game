let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");

// let sumEl = document.getElementById("sum-el");

// or

let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("card-el");

let player = {
  name: "sara",
  chips: 145,
};

let playerEl = getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomNum = Math.floor(Math.random() * 13) + 1; // 1-13(Including 1 and 13)

  if (randomNum > 10) {
    return 10;
  } else if (randomNum === 1) {
    return 11;
  } else {
    return randomNum;
  }
}
function startGame() {
  isAlive = true;

  let firstCard = getRandomCard();
  let secondCard = getRandomCard();

  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw another card";
  } else if (sum === 21) {
    message = "Woo!, You'be got Blackjack";
    hasBlackJack = true;
  } else {
    message = "You're out of the game";
    isAlive = false;
  }
  messageEl.textContent = message;
}
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);

    renderGame();
  }
}
