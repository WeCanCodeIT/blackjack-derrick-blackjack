// Suits: ♥ ♠ ♣ ♦
const {singleDeckGame} = require('blackjack-dealer-logic');
// const input = require('readline-sync');

let isGameRunning = false;
let instructions = "";

startGame();

while(isGameRunning) {
  let playerBet;
  let playerChips;
  let dealerBet;
  let dealerChips;
  let pot;
  p(`Your current chip count is ${playerChips} `);
}

function startGame() {    
  const startButton = document.getElementById('startGame');
    startButton.addEventListener('click', () => {
      console.log('startButton was clicked');
      isGameRunning = true;
      startButton.remove();

      // singleDeckGame.deal();
      // const userHand = singleDeckGame.getUserHand();
      // generateCard(userHand.getCards() [0]);
      // generateCard(userHand.getCards() [1]);
    createButton("Hit", "hit", "hitButton", document.body);
    let hitButton = document.getElementById("hitButton");
    hitButton.addEventListener('click', () => {
      generateCard(card);
    });

    // createButton("Stay", "stay", document.body);
    // createButton("Double", "double", document.body);

    document.getElementById("instructionsText").textContent = instructions; 
  });
}

function createButton (buttonLabel, buttonClass, buttonId, buttonDestination) {
  const genericButton = document.createElement("button");
  genericButton.textContent = buttonLabel;
  genericButton.classList.add(buttonClass);
  genericButton.setAttribute("id", buttonId)
  buttonDestination.append(genericButton);
}

function createParagraph (text, paragraphClass, paragraphDestination) {
  const textElement = document.createElement("p");
  textElement.textContent = text;
  textElement.classList.add(paragraphClass);
  paragraphDestination.append(textElement);
}

function updateChips (player, increment) {
  const playerChips = document.createElement("player-chips");
  playerChips.classList.add(increment);
}

function generateCard(card) {
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

  const table = document.querySelector(".table");
  table.append(playingCard)
}

// const buttons = document.querySelectorAll('.button')
// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     const paragraph = document.createElement('p')
//     paragraph.textContent = 'My new paragraph!'

//     paragraph.classList.add('newParagraph')

//     document.body.append(paragraph)
//   })
// })