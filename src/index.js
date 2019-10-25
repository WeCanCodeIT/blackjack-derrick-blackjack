const {
  default: { singleDeckGame }
} = require("blackjack-dealer-logic");
const Dom = require("./utils/Dom");

singleDeckGame.deal();

Dom.startGame(singleDeckGame);

let userChips = document.querySelector(".player-chips__bet")
const playerAnte = prompt(`How much do you want to bet? Current chip count: ${singleDeckGame.getUserChips()}`);

userChips.textContent = playerAnte;
singleDeckGame.receiveAnte(Number(playerAnte));