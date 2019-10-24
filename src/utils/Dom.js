module.exports = {
  addButtonEvent(singleDeckGame) {
    hitButton.addEventListener('click', () => {
      console.log('Hit functionality:');
      singleDeckGame.hitUser();
      this.renderCards(userHand.getCards(), document.querySelector('.player'));
      console.log("Done");
    })    

  },
  buildDoubleButton() {
    this.createButton("Double", "double", "doubleButton", document.querySelector('.buttons-area'))
    console.log("buildDouble...");
    this.addButtonEvent();  
  },
  
  buildHitButton() {
    this.createButton("Hit", "hit", "hitButton", document.querySelector('.buttons-area'));
    let hitButton = document.getElementById("hitButton");
    console.log("buildHit...")
  },
  
  buildStayButton() {
    this.createButton("Stay", "stay", "stayButton", document.querySelector('.buttons-area'))
    console.log('buildStay...');
    },
  
  createButton(buttonLabel, buttonClass, buttonId, buttonDestination) {
    const genericButton = document.createElement("button");
    genericButton.textContent = buttonLabel;
    genericButton.classList.add(buttonClass);
    genericButton.setAttribute("id", buttonId)
    buttonDestination.append(genericButton);
    console.log('building a button: ')
    },

  createParagraph(text, paragraphClass, paragraphDestination) {
    const textElement = document.createElement("p");
    textElement.textContent = text;
    textElement.classList.add(paragraphClass);
    paragraphDestination.append(textElement);
    },

  generateCard(card) {
    const playingCard = document.createElement('section');
    playingCard.classList.add('playing-card');
    
    const container = document.createElement('section');
    container.classList.add('container');
    
    const value = document.createElement('span');
    value.classList.add('value');
    value.textContent = card.getValue();
    
    const suit = document.createElement('span');
    suit.classList.add('suit');
    suit.textContent = card.getSuit();
    
    playingCard.append(container);
    container.append(value);
    container.append(suit);  
    console.log('returning a playing card: ' + playingCard);
    return playingCard;
    },

  initGame(singleDeckGame) {
    console.log(singleDeckGame);
    console.log("Initializing buttons...");

    this.buildHitButton();
    this.buildStayButton();
    this.buildDoubleButton();  
    console.log('dealing user and dealer hands...');
    this.renderCards(singleDeckGame.getUserHand().getCards(), document.querySelector('.player'));
    this.renderCards(singleDeckGame.getDealerHand().getCards(), document.querySelector('.dealer'));
  },
  
  renderCards(cardsArray, containerElement) {
  cardsArray.forEach(card => {
      containerElement.append(this.generateCard(card));
    })
  },

  startGame(singleDeckGame) {    
    console.log(singleDeckGame);
    const startButton = document.getElementById('startGame');
    startButton.addEventListener('click', () => {
    startButton.remove();
    this.initGame(singleDeckGame);
    });
  },

  updateChips(player, increment) {
    const playerChips = document.createElement("player-chips");
    playerChips.classList.add(increment);
    }
}
