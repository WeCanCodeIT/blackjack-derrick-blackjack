const {
  default: { singleDeckGame, Result }
} = require("blackjack-dealer-logic");
const Dom = require("./utils/Dom");

singleDeckGame.deal();

Dom.startGame(singleDeckGame, Result);
Dom.initialAnte(singleDeckGame);