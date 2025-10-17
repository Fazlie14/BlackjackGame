let firstCard = 5;
let secondCard = 6;
let cards = [firstCard,secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = ""
let messageEl = document.getElementById("messg-El");
let sumEl = document.querySelector("#sumEl");
let cardsEl = document.querySelector("#card-El");

function startGame(){
  renderGame();
}

function renderGame(){
  cardsEl.textContent = `Cards: ${cards} `;
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

function newCard(){
  let card = 8;
  sum += card;
  cards.push(card);
  

  renderGame();
  
}



