const board = document.querySelector('#board')
const colors = ['Aqua', 'Yellow', 'Lavender', 'Navy','SlateBlue','Honeydew','Maroon','Gray',
'Gainsboro','Black','Fuchsia','Purple']
const SQUARES_NUMBER = 500

for(i = 0; i < SQUARES_NUMBER; i++){
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () =>
  setColor(square))

  square.addEventListener('mouseleave', () =>
  removeColor(square))

  board.append(square)
}

function setColor(element){
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px color ${color}, 0 0 10px ${color}`
}

function removeColor(element){
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px color #000`
}

function getRandomColor(){
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}