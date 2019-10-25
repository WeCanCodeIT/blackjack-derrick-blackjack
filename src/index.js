const {
  default: { singleDeckGame }
} = require("blackjack-dealer-logic");
const Dom = require("./utils/Dom");
let isGameOver = false;
let userChipsTotal;
singleDeckGame.deal();

Dom.startGame(singleDeckGame);
let userChips = singleDeckGame.getUserChips;
let playerAnte = prompt(`How much do you want to bet? Current chip count: ${singleDeckGame.getUserChips()}`);

userChips.textContent = playerAnte;
while (isGameOver === false){
  if (singleDeckGame.getUserChips > 21){
    // end the game
  }
}
if (isGameOver === true) {
  if (userWin){
  userChips = singleDeckGame.receiveChips(playerAnte);
  console.log("new user chips count: " + singleDeckGame.getUserChips());
  } 
  else if (userLose) {
  userChips = singleDeckGame.wagerChips(playerAnte);
  console.log("new user chips count: " + singleDeckGame.getUserChips());

  } else {
    console.log("Game ended in a PUSH");
  }
}


singleDeckGame.receiveAnte(Number(playerAnte));