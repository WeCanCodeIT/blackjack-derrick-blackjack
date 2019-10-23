module.exports = {

  buildDoubleButton() {
    createButton("Double", "double", "doubleButton", document.body);
    },
  
  buildHitButton() {
    createButton("Hit", "hit", "hitButton", document.body);
    let hitButton = document.getElementById("hitButton");
    hitButton.addEventListener('click', () => {
    console.log('hit function...');
    })
  },
  
  buildStayButton() {
    createButton("Stay", "stay", "stayButton", document.body);
    },
  
  createButton (buttonLabel, buttonClass, buttonId, buttonDestination) {
    const genericButton = document.createElement("button");
    genericButton.textContent = buttonLabel;
    genericButton.classList.add(buttonClass);
    genericButton.setAttribute("id", buttonId)
    buttonDestination.append(genericButton);
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
    const table = doc.querySelector('.table')
    cardsArray.forEach(card => {
    if (typeof cardsArray !== typeof [] ){
      //catchFire();
    } else {
      // code
      cardsArray.forEach(card => {
      containerElement.append(this.generateCard(card));
    })
    }
  })
  },
  
  renderHands() {
    const dealerHand = singleDeckGame.getDealerHand();
    renderCards(dealerHand.getCards(), document.querySelector('.dealer'));
    const userHand = singleDeckGame.getUserHand();
    renderCards(userHand.getCards(), document.querySelector('.player'));
    },

  startGame() {    
    const startButton = document.getElementById('startGame');
    startButton.addEventListener('click', () => {
    console.log('startButton was clicked');
    startButton.remove();
    singleDeckGame.deal();
    isGameRunning = true;
    });
  }
}
