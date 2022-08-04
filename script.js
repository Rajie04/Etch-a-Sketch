

const container = document.getElementById('container');
const btns = document.querySelectorAll('button');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
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
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    
}

function getColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}

function squareNum(){
   let value = parseInt(prompt("Choose a number of squares between 1-100")) ** 2;
   if (value > 100 ** 2){
     alert("Value too high!");
     return squareNum();
} else{
     return value
}
}
