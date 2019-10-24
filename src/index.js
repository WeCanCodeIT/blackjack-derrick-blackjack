// Suits: ♥ ♠ ♣ ♦
 const {
  default: { singleDeckGame }
} = require("blackjack-dealer-logic");
const Dom = require("./utils/Dom");

singleDeckGame.deal();

const userHand = singleDeckGame.getUserHand();
const dealerHand = singleDeckGame.getDealerHand();

Dom.renderCards(userHand.getCards(), document.querySelector('.player'));
Dom.renderCards(dealerHand.getCards(), document.querySelector('.dealer'));

Dom.startGame();
console.log("Initializing buttons...");
let hitButton = document.getElementById("hitButton");
hitButton.addEventListener('click', () => {
  console.log('Hit functionality:');
  singleDeckGame.hitUser();
  console.log("Done");
})

// document.getElementById("instructionsText").textContent = instructions; 
