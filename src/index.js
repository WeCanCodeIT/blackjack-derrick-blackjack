// Suits: ♥ ♠ ♣ ♦
 const {
  default: { singleDeckGame }
} = require("blackjack-dealer-logic");
const Dom = require("./utils/Dom");

singleDeckGame.deal();

Dom.startGame(singleDeckGame);

// document.getElementById("instructionsText").textContent = instructions; 
