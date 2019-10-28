const {
  default: { singleDeckGame, Result }
} = require("blackjack-dealer-logic");
const Dom = require("./utils/Dom");

Dom.startGame(singleDeckGame, Result);
// Dom.initialAnte(singleDeckGame);