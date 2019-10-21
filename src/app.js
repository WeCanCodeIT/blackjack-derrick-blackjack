// console.log('Hello world');

const buttons = document.querySelectorAll('.button')
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const paragraph = document.createElement('p')
    paragraph.textContent = 'My new paragraph!'

    paragraph.classList.add('newParagraph')

    document.body.append(paragraph)
  })
})
const backgroundButton = document.querySelector('.addBackground')
backgroundButton.addEventListener('click', () => {
  paragraph.querySelectorAll('newParagraph')
  paragraph.classList.add('newParagraph')
})
