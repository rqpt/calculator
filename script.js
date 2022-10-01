const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display p');
console.log(buttons);
console.log(display);
buttons.forEach(button => button.addEventListener('click', takeNum));

function takeNum(

