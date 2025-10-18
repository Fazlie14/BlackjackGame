
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = ""
let messageEl = document.getElementById("messg-El");
let sumEl = document.querySelector("#sumEl");
let cardsEl = document.querySelector("#card-El");

let player = {
  name: "Fazlie",
  chip: 250
}

let playerEl = document.getElementById("player-El")

playerEl.textContent = player.name + ": $" + player.chip ;


function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if(randomNumber > 10){
      return 10
    }else if(randomNumber === 1){
      return 11
    }else{
    return randomNumber;
    }
}

function startGame(){
  
  if(isAlive === false){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard, secondCard)
    sum = firstCard + secondCard;
    renderGame();
  }
}

function renderGame(){

  if(isAlive === true){
    cardsEl.textContent = "Cards: "

    for(let i = 0; i < cards.length; i++){
      cardsEl.textContent += cards[i] + " " ;
    }
  
    sumEl.textContent = `Sum: ${sum}`;
    if(sum <= 20){
      message = "Do you want to draw a new card?"
      isAlive = true
    }else if(sum === 21){
      message = "You've got a blackjack!"
      hasBlackJack = true;
      isAlive = false
    }else{
      message = "You're out of the game"
      isAlive = false
    }
    messageEl.textContent = message;

  }else{
    isAlive = false
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: "
    messageEl.textContent = ""
  }

   

  
  
  
}

function newCard(){

  if(isAlive === true && hasBlackJack === false){
    
    let card = getRandomCard()
    sum += card;
    cards.push(card)
    renderGame();
  
   
  }
  
 
  

  
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

*/

let hands = ["rock", "paper", "scissor"]

function randomItem(){
  let randomNum = Math.floor(Math.random() * 3) 

  return hands[randomNum]

}

console.log(randomItem())



