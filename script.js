

const container = document.getElementById('container');
const btns = document.querySelectorAll('button');
const colors = ['red', 'green', 'blue'];
const SQUARES = squareNum();


for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square))
    container.appendChild(square);

}

function setColor(element) {
    const color = getColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}`;
    
}

function getColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}

function squareNum(){
   return parseInt(prompt("how many squares would you like?")) ** 2;
}
