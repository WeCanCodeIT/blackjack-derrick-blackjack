module.exports = {
  buildDoubleButton(singleDeckGame, Result) {
    this.createButton("Double", "double", "doubleButton", document.querySelector('.buttons-area'))
    const doubleButton = document.getElementById("doubleButton");
    const userChipsText = document.querySelector(".player-chips__bet");
    doubleButton.addEventListener('click', () => {
      singleDeckGame.doubleUser();
      userChipsText.textContent = singleDeckGame.getAnte();
      this.stayEvent(singleDeckGame, Result);
    });
  },
  
  buildHitButton(singleDeckGame, Result) {
    this.createButton("Hit", "hit", "hitButton", document.querySelector('.buttons-area'));
    let hitButton = document.getElementById("hitButton");
    hitButton.addEventListener('click', () => {
      this.hitEvent(singleDeckGame, Result);
    });    
  },
  
  buildRestartButton(singleDeckGame, Result) {
    const buttonsArea = document.querySelector(".buttons-area");
    buttonsArea.innerHTML = "";
    this.createButton("Play again!", "restart", "restartButton", buttonsArea, singleDeckGame);
    document.body.addEventListener('click', event => {
      if (event.target.classList.contains("restart")) {
        singleDeckGame.resetPlayers();
        this.resetGame(singleDeckGame, Result);
      }
    });
  },

  buildStayButton(singleDeckGame, Result) {
    this.createButton("Stay", "stay", "stayButton", document.querySelector('.buttons-area'));
    let stayButton = document.getElementById("stayButton");
    stayButton.addEventListener("click", () => {
      this.stayEvent(singleDeckGame, Result);
    })
  },
  
  createButton(buttonLabel, buttonClass, buttonId, buttonDestination, singleDeckGame) {
    const genericButton = document.createElement("button");
    genericButton.textContent = buttonLabel;
    genericButton.classList.add(buttonClass);
    genericButton.setAttribute("id", buttonId)
    buttonDestination.append(genericButton);
  },
  
  generateCard(card, singleDeckGame) {
    const playingCard = document.createElement("section");
    playingCard.classList.add("playing-card");
    
    const container = document.createElement("section");
    container.classList.add("container");
    
    const value = document.createElement("span");
    value.classList.add("value");
    value.textContent = card.getValue();
    
    const suit = document.createElement("span");
    suit.classList.add("suit");
    suit.textContent = card.getSuit();
    
    playingCard.append(container);
    container.append(value);
    container.append(suit);  
    return playingCard;
  },
  
  hitEvent(singleDeckGame, Result) {
    singleDeckGame.hitUser();
    singleDeckGame.evaluateUser();
    document.querySelector(".player-cards-view").innerHTML = "";
    singleDeckGame.evaluateDealer();
    this.renderCards(singleDeckGame.getUserHand().getCards(), document.querySelector('.player-cards-view'));
  },
  
  initGame(singleDeckGame, Result) {
    this.initialAnte(singleDeckGame);

    singleDeckGame.deal();
    
    let userChipsTotalText = document.querySelector('.player-chips-total');
    userChipsTotalText.textContent = singleDeckGame.getUserChips();

    this.buildHitButton(singleDeckGame, Result);
    this.buildStayButton(singleDeckGame, Result);
    this.buildDoubleButton(singleDeckGame, Result);  
    this.renderHands([
      { cards: [singleDeckGame.getDealerHand().getCards()[1]],
        container: ".dealer-cards-view" },
        { cards: singleDeckGame.getUserHand().getCards(),
          container: ".player-cards-view" }
      ]);
  },
    
  initialAnte(singleDeckGame) {
    let userChipsText = document.querySelector('.player-chips__bet');
    let userChipsTotalText = document.querySelector('.player-chips-total');
    let playerAnte = prompt(`How much do you want to bet? Current chip count: ${singleDeckGame.getUserChips()}`);
    userChipsText.textContent = playerAnte;
    console.log("player ante = " + playerAnte)
    singleDeckGame.receiveAnte(Number(playerAnte));
    userChipsTotalText.textContent = singleDeckGame.getUserChips();
  },
      
  renderCards(cardsArray, containerElement, singleDeckGame) {
    cardsArray.forEach(card => {
      containerElement.append(this.generateCard(card, singleDeckGame));
    });
  },
      
  renderHands(handArray) {
    handArray.forEach(hand => {
      this.renderCards(hand.cards, document.querySelector(hand.container));
    })
  },
      
  resetGame(singleDeckGame, Result) {
    // increment (or not) player's chips total, reset values....
    // singleDeckGame.receiveAnte(singleDeckGame.getAnte());
    // singleDeckGame.resetAnte();
    // singleDeckGame.resetPlayers();
    
    // clear all dat shit
    const dealerArea = document.querySelector(".dealer-cards-view");
    dealerArea.innerHTML = "";
    const playerArea = document.querySelector(".player-cards-view");
    playerArea.innerHTML = "";
    const resultArea = document.querySelector(".result-container");
    resultArea.innerHTML = "";
    // reset the game
    this.initGame(singleDeckGame, Result);
  },

  startGame(singleDeckGame, Result) {    
    const startButton = document.getElementById("startGame");
    startButton.addEventListener("click", () => {
    startButton.remove();
    this.initGame(singleDeckGame, Result);
    });
  },

  stayEvent(singleDeckGame, Result) {
    singleDeckGame.standUser();
    singleDeckGame.evaluateUser();
    singleDeckGame.settleDealerHand();

    //disable buttons
    /* derp! */
    
    // clear player hand, re-render whole hand
    const playerContainer = document.querySelector(".player-cards-view");
    playerContainer.innerHTML = "";
    this.renderCards(singleDeckGame.getUserHand().getCards(), playerContainer);

    // clear dealer hand, re-render whole hand
    const dealerContainer = document.querySelector(".dealer-cards-view");
    dealerContainer.innerHTML = "";
    this.renderCards(singleDeckGame.getDealerHand().getCards(), dealerContainer);

    singleDeckGame.evaluateDealer();
    
    const resultContainer = document.querySelector('.result-container')
    this.buildRestartButton(singleDeckGame, Result);
    const restartButton = document.querySelector(".restart");
    resultContainer.append(restartButton);

    switch(singleDeckGame.outcome()) {
      case Result.WIN:
        singleDeckGame.userWin();
        resultContainer.innerHTML += "Winner winner chicken dinner!";
        break;
      case Result.LOSS:
        resultContainer.innerHTML += "Loser loser little snoozer...";
        break;
      case Result.PUSH:
        resultContainer.innerHTML += "You pushed...so try again!";
        break;

        default:
          break;
      }
    }
}
