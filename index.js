let firstCard = 10;
let secondCard = 9;

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = ""

if(sum <= 20){
  message = "Do you want to draw a new card?"
  
}else if(sum === 21){
  message = "Wohooo! You've got a blackjack!"
  hasBlackJack = true;
}else{
  message = "You're out of the game"
  isAlive = false
}
console.log(isAlive)
console.log(message)