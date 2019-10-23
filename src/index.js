// Suits: ♥ ♠ ♣ ♦
 const {
  default: { singleDeckGame }
} = require("blackjack-dealer-logic");
const Dom = require("./utils/Dom");

let isGameRunning = true;

Dom.startGame();

while(isGameRunning) {
  console.log('game is running')
  singleDeckGame.deal();

  Dom.buildHitButton();
  Dom.buildStayButton();
  Dom.buildDoubleButton();

  const userHand = singleDeckGame.getUserHand();
  Dom.generateCard(userHand.getCards()[0]);
  Dom.generateCard(userHand.getCards()[1]);
  Dom.renderCards(userHand.getCards(), document.querySelector('.player'));

}

  // document.getElementById("instructionsText").textContent = instructions; 


