// Suits: ♥ ♠ ♣ ♦
const {singleDeckGame} = require('blackjack-dealer-logic');
// const input = require('readline-sync');
const Dom = require('./utils/Dom');

let isGameRunning = false;
let instructions = "";

Dom.startGame();

while(isGameRunning) {
  renderHands();
  buildHitButton();
  buildStayButton();
  buildDoubleButton();

}

  document.getElementById("instructionsText").textContent = instructions; 



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


// const buttons = document.querySelectorAll('.button')
// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     const paragraph = document.createElement('p')
//     paragraph.textContent = 'My new paragraph!'

//     paragraph.classList.add('newParagraph')

//     document.body.append(paragraph)
//   })
// })