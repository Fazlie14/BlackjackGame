let firstCard = 10;
let secondCard = 11;

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = ""
let messageEl = document.getElementById("messg-El");
let sumEl = document.querySelector("#sumEl");
let cardsEl = document.querySelector("#card-El");


function startGame(){
  cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`;
  sumEl.textContent = `Sum: ${sum}`;
  if(sum <= 20){
    message = "Do you want to draw a new card?"
    
  }else if(sum === 21){
    message = "You've got a blackjack!"
    hasBlackJack = true;
  }else{
    message = "You're out of the game"
    isAlive = false
  }
  messageEl.textContent = message;
  
}

