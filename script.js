// QUERYSELECTORS
 
// Display - display the inputs and results to the user
 const displayContent = document.querySelector('.displayContent');

// Inputs - user interacts with these
 const operands = document.querySelectorAll('.button.operand');
 const operators = document.querySelectorAll('button.operator');
 const undoBtn = document.querySelector('#undo');
 const powerBtn = document.querySelector('#powerOff');
 const floatingPoint = document.querySelector('#floatingPoint');
 const equals = document.querySelector('#equals');


// EVENTLISTENERS - 

// Operands and operators
operands.forEach(operand => operand.addEventListener('click', e => calculate(e.target.innerText)));
operators.forEach(operator => operator.addEventListener('click', e => calculate(e.target.innerText)));

// Special inputs
undoBtn.addEventListener('click', () => undo());
powerBtn.addEventListener('click', () => powerOff());
floatingPoint.addEventListener('click', e => calculate(e.target.innerText));
equals.addEventListener('click', e => calculate(e.target.innerText));


// FUNCTIONS
const add = (num1, num2) => +num1 + +num2;
const multiply = (num1, num2) => num1 * num2;
const subtract = (num1, num2) => num1 - num2;
const divide = (num1, num2) => num1 / num2;

let operand1 = [];
let operator;
let operand2 = [];
let result;

function calculate(input) {
	if (input % 1 === 0 || input === '.') {
		if (operator === undefined) {
			operand1.push(input);
			displayContent.innerText = operand1.join('');
		} else {
			operand2.push(input);
			displayContent.innerText = operand2.join('');
		}
	} else if (operator === undefined) {
		operator = input;
		displayContent.innerText = input;
	} else {
		switch (operator) {
			case 'x':
				result = multiply(operand1.join(''), operand2.join(''));
				break;
			case '/':
				result = divide(operand1.join(''), operand2.join(''));
				break;
			case '+':
				result = add(operand1.join(''), operand2.join(''));
				break;
			case '-':
				result = subtract(operand1.join(''), operand2.join(''));
		}
		displayContent.innerText = result;
		operand1 = [`${result}`];
		operand2 = [];
	}
}

function powerOff() {
	operand1 = []
	operator = undefined
	operand2 = []
	result = undefined
	displayContent.innerText = '';
}

function undo() {
	if (operand2.length === 0) {
	operand1.pop()
	displayContent.innerText = operand1.join('');
	} else {
	operand2.pop()
	displayContent.innerText = operand2.join('');
	}
}
