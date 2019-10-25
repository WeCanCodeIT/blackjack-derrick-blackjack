module.exports = {
  buildDoubleButton() {
    this.createButton("Double", "double", "doubleButton", document.querySelector('.buttons-area'))
    // this.addButtonEvent();  
  },
  
  buildHitButton(singleDeckGame) {
    this.createButton("Hit", "hit", "hitButton", document.querySelector('.buttons-area'));
    let hitButton = document.getElementById("hitButton");
    
    hitButton.addEventListener('click', () => {
      this.hitEvent(singleDeckGame);
    });    
  },
  
  buildStayButton(singleDeckGame) {
    this.createButton("Stay", "stay", "stayButton", document.querySelector('.buttons-area'));
    let stayButton = document.getElementById("stayButton");
    stayButton.addEventListener("click", () => {
      this.stayEvent(singleDeckGame);
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

  createParagraph(text, paragraphClass, paragraphDestination) {
    const textElement = document.createElement("p");
    textElement.textContent = text;
    textElement.classList.add(paragraphClass);
    paragraphDestination.append(textElement);
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
  
  hitEvent(singleDeckGame) {
    singleDeckGame.hitUser();
    singleDeckGame.evaluateUser();
    document.querySelector(".player-cards-view").innerHTML = "";
    singleDeckGame.evaluateDealer();
    this.renderCards(singleDeckGame.getUserHand().getCards(), document.querySelector('.player-cards-view'));

    console.log("Hit function complete");
  },

  initGame(singleDeckGame) {

    console.log("Initializing buttons...");

    this.buildHitButton(singleDeckGame);
    this.buildStayButton(singleDeckGame);
    this.buildDoubleButton(singleDeckGame);  

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
  
  renderCards(cardsArray, containerElement, singleDeckGame) {
  cardsArray.forEach(card => {

    // console.log("iterating through cardsArray in renderCards.. appending: " + card)

    containerElement.append(this.generateCard(card, singleDeckGame));
    });
  },

  renderHands(handArray) {
    handArray.forEach(hand => {
      this.renderCards(hand.cards, document.querySelector(hand.container));
    })
  },

  startGame(singleDeckGame) {    
    console.log(singleDeckGame);
    const startButton = document.getElementById("startGame");
    startButton.addEventListener("click", () => {
    startButton.remove();
    this.initGame(singleDeckGame);
    });
  },

  stayEvent(singleDeckGame, Result) {
    singleDeckGame.standUser();
    singleDeckGame.evaluateUser();

    //disable buttons

    //eval dealer
    singleDeckGame.evaluateDealer();
    const dealerContainer = document.querySelector(".dealer");
    dealerContainer.innerHTML = "";
    this.renderCards(singleDeckGame.getDealerHand().getCards(), dealerContainer);
  }
}
