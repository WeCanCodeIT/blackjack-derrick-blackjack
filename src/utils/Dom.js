module.exports = {

  buildDoubleButton() {
    this.createButton("Double", "double", "doubleButton", document.querySelector('.buttons-area'));
    },
  
  buildHitButton() {
    this.createButton("Hit", "hit", "hitButton", document.querySelector('.buttons-area'));
    let hitButton = document.getElementById("hitButton");
    hitButton.addEventListener('click', () => {
    console.log('hit function...');
    })
  },
  
  buildStayButton() {
    this.createButton("Stay", "stay", "stayButton", document.querySelector('.buttons-area'));
    },
  
  createButton(buttonLabel, buttonClass, buttonId, buttonDestination) {
    const genericButton = document.createElement("button");
    genericButton.textContent = buttonLabel;
    genericButton.classList.add(buttonClass);
    genericButton.setAttribute("id", buttonId)
    buttonDestination.append(genericButton);
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

    return playingCard;
    },
  
  renderCards(cardsArray, containerElement) {
  cardsArray.forEach(card => {
      containerElement.append(this.generateCard(card));
    })
  },

  startGame() {    
    const startButton = document.getElementById('startGame');
    startButton.addEventListener('click', () => {
    startButton.remove();
    });
  },

  updateChips(player, increment) {
    const playerChips = document.createElement("player-chips");
    playerChips.classList.add(increment);
    }
}
