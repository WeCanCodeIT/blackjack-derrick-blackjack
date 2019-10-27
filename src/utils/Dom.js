module.exports = {
  buildDoubleButton(singleDeckGame, Result) {
    this.createButton("Double", "double", "doubleButton", document.querySelector('.buttons-area'))
    // this.addButtonEvent();  
  },
  
  buildHitButton(singleDeckGame, Result) {
    this.createButton("Hit", "hit", "hitButton", document.querySelector('.buttons-area'));
    let hitButton = document.getElementById("hitButton");
    
    hitButton.addEventListener('click', () => {
      this.hitEvent(singleDeckGame);
    });    
  },
  
  buildStayButton(singleDeckGame, Result) {
    this.createButton("Stay", "stay", "stayButton", document.querySelector('.buttons-area'));
    let stayButton = document.getElementById("stayButton");
    stayButton.addEventListener("click", () => {
      this.stayEvent(singleDeckGame, Result);
    })
    },
  
  createButton(buttonLabel, buttonClass, buttonId, buttonDestination) {
    const genericButton = document.createElement("button");
    genericButton.textContent = buttonLabel;
    genericButton.classList.add(buttonClass);
    genericButton.setAttribute("id", buttonId)
    buttonDestination.append(genericButton);
    console.log('built a button')
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
    console.log('returning a playing card: ' + playingCard);
    return playingCard;
  },
  
  hitEvent(singleDeckGame, Result) {
    singleDeckGame.hitUser();
    singleDeckGame.evaluateUser();
    document.querySelector(".player-cards-view").innerHTML = "";
    singleDeckGame.evaluateDealer();
    this.renderCards(singleDeckGame.getUserHand().getCards(), document.querySelector('.player-cards-view'));

    console.log("Hit function complete");
  },

  initGame(singleDeckGame, Result) {

    console.log("Initializing buttons...");

    this.buildHitButton(singleDeckGame, Result);
    this.buildStayButton(singleDeckGame, Result);
    this.buildDoubleButton(singleDeckGame, Result);  

    console.log('dealing user and dealer hands...');

    this.renderHands([
      {
        cards: [singleDeckGame.getDealerHand().getCards()[1]],
        container: ".dealer"
      },
      {
        cards: singleDeckGame.getUserHand().getCards(),
        container: ".player-cards-view"
      }
    ]);
  
  },

  initialAnte(singleDeckGame) {
    let userChipsText = document.querySelector('.player-chips__bet');
    let userChipsTotalText = document.querySelector('.player-chips-total');
    let playerAnte = prompt(`How much do you want to bet? Current chip count: ${singleDeckGame.getUserChips()}`);
    userChipsText.textContent = playerAnte;
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
    
    // clear dealer hand, re-render whole hand
    const dealerContainer = document.querySelector(".dealer");
    dealerContainer.innerHTML = "";
    this.renderCards(singleDeckGame.getDealerHand().getCards(), dealerContainer);

    singleDeckGame.evaluateDealer();
    const resultContainer = document.querySelector('.result-container')

    //restart button

    switch(singleDeckGame.outcome()) {
      case Result.WIN:
        singleDeckGame.userWin();
        resultContainer.innerHTML += "Winner winner chicken dinner!";
        break;
      case Result.LOSS:
        resultContainer.innerHTML += "Loser loser little snoozer...";
        break;
      case Result.PUSH:
        resultContainer.innerHTML += "You pushed. So try again!";
        break;

        default:
          break;
      }
    }
}
