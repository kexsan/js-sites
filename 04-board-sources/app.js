const board = document.querySelector('#board')
const SQUARES_NUMBER = 700
const colors = ['#F08080', '#ADFF2F', '#FF4500', '#FFFF00', '#00FFFF','#7B68EE']

for (let index = 0; index < SQUARES_NUMBER; index++) {
    const square = document.createElement('div');
    square.classList.add('square')
    square.addEventListener('mouseover', () => {
        setColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })

    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })
    board.append(square)

}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.box-shadow(`0 0 5px ${color}, 0 0 10px ${color}`)
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.box-shadow(`0 0 2px #000`)
}


function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

