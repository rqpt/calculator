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
floatingPoint.addEventListener('click', e => calculate(e.target.innerText));

// Special inputs
undoBtn.addEventListener('click', () => undo());
powerBtn.addEventListener('click', () => powerOff());
equals.addEventListener('click', () => eq());


// FUNCTIONS

// Arithmetic logic functions
const add = (num1, num2) => +num1 + +num2;
const multiply = (num1, num2) => num1 * num2;
const subtract = (num1, num2) => num1 - num2;
const divide = (num1, num2) => num1 / num2;

// Operator and operand global variables
let operand1 = [];
let operator;
let operand2 = [];
let result;

// Main function - 
// this takes the user inputs, change the operator and operand variables and call the display funcs accordingly
function calculate(input) {
	const operators = ['/', 'x', '-', '+'];
	if ((input % 1 === 0 || input === '.')) {
		if (operator === undefined) {
			operand1.push(input);
			console.log(operand1)
			displayOperand1();
		} else {
			operand2.push(input);
			displayOperand2();
		}
	} else if ((operator === undefined) && (operators.find(operator => operator === input))) {
		operator = input;
		displayOperator();
	} else if ((operator !== undefined) && (operators.find(operator => operator === input) && operand2.length === 0) 
		|| ((operand1.join('') === '0') && (operator === '/'))){
		clearVars();
		displayError();
	} else {
		eq(operator);
	}
	if (result > 99999999) {
		clearVars();
		displayError();
	} else {
		displayResult();
	}
}

function eq(value) {
	if (operand2.length > 0) {
		switch (value) {
			case 'x':
				result = multiply(operand1.join(''), operand2.join(''));
				operator = value;
				break;
			case '/':
				result = divide(operand1.join(''), operand2.join(''));
				operator = value;
				break;
			case '+':
				result = add(operand1.join(''), operand2.join(''));
				operator = value;
				break;
			case '-':
				result = subtract(operand1.join(''), operand2.join(''));
				operator = value;
		}
	} else {
		displayError();
		clearVars();
	}
}

// Display functions - change the calculator screen output
function displayError() {
	displayContent.innerText = 'Error';
}

function displayOperator() {
	displayContent.innerText = operator;
}

function displayOperand1() {
	displayContent.innerText = operand1.join('');
}

function displayOperand2() {
	displayContent.innerText = operand2.join('');
}

function displayResult() {
	displayContent.innerText = Math.round((result * (10**3))) / (10**3);
	operand1 = [`${result}`];
	operand2 = [];
}

// Special input functions - reset/modify variable values
function powerOff() {
	clearVars();
	displayContent.innerText = '';
}

function undo() {
	if (result !== undefined) {
		clearVars();
		displayContent.innerText = '';
	} else if (operand2.length === 0) {
	operand1.pop()
	displayContent.innerText = operand1.join('');
	} else {
	operand2.pop()
	displayContent.innerText = operand2.join('');
	}
}

// Utility function - reset all variable values
function clearVars() {
	operand1 = [];
	operator = undefined;
	operand2 = [];
	result = undefined;
}
