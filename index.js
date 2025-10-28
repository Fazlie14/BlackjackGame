let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
const messageEl = document.getElementById("messg-El");
const sumEl = document.querySelector("#sumEl");
const cardsEl = document.querySelector("#card-El");
const registerBtn = document.getElementById("register-el");
const playerEl = document.getElementById("player-El");

let player = {
  name: "",
  chip: 0,
};

registerBtn.addEventListener("click", function () {
  let playerName = prompt("Enter your name:");
  let playerChip = Number(prompt("Enter your chip amount:"));

  if ( !playerName || playerName.trim() === "" ||isNaN(playerChip) || playerChip <= 0){
    alert("Registration cancelled or invalid input!");
    return;
  }

  playerName = playerName.trim();
  player.name = playerName[0].toUpperCase() + playerName.slice(1).toLowerCase();
  player.chip = playerChip;

  playerEl.innerHTML = `Name: ${player.name} <br> Chip: $${player.chip}`;

  alert(
    `You are registered as ${player.name} with $${player.chip} chips. Let's play!`
  );
});

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  

  if (player.name === "" && player.chip === 0) {
    alert("Please register your name and chip amount first.");
    return;
  }

  if (isAlive === false && player.name !== "" && player.chip > 0) {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
  }
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  sumEl.textContent = "";
  messageEl.textContent = "";

  if (isAlive === true) {
    for (let i = 0; i < cards.length; i++) {
      cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = `Sum: ${sum}`;

    if (sum <= 20) {
      message = "Do you want to draw a new card?";
      isAlive = true;
    } else if (sum === 21) {
      message = "You've got a blackjack!";
      hasBlackJack = true;
      reset(message);
    } else {
      message = "You're out of the game";
      reset(message);
    }
    messageEl.textContent = message;
  } else {
    reset(message);
    console.log(reset(message));
  }
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

function reset(message) {
  setTimeout(function () {
    cards = [];
    sum = 0;
    isAlive = false;
    hasBlackJack = false;
    cardsEl.textContent = "Cards: ";
    sumEl.textContent = "Sum: ";
    messageEl.textContent = "Do you want to play a game?";
  }, 3000);
}
/*
let person = {
  name: "Fazlie",
  age: 23,
  country: "Philippines"
}

function logData(){
  return `${person.name} is ${person.age} years old and Lives in ${person.country}`
}
console.log(logData())



let hands = ["rock", "paper", "scissor"]

function randomItem(){
  let randomNum = Math.floor(Math.random() * 3) 

  return hands[randomNum]

}

console.log(randomItem())

*/
