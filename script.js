const display = document.querySelector('p');
const regInputs = document.querySelectorAll('.button.regular');
const specialInputs = document.querySelectorAll('button.special');

regInputs.forEach(input => input.addEventListener('click', e => {
	displayVal(e.target.innerText);
}));

// Display function

function displayVal(value) {
	const operands = ['x', '/', '-', '+',]
	if (operands.find(operand => operand === value) && display.innerText === '') {
		display.innerText = 'ERROR';
	} else {
		display.innerText = '';
		display.innerText += value;
	}
};

// Calculate function

// if the display was clear and user inputs a number
// create a new object called calculation with the first input being a property of firstnum
// for each additional number input thereafter append the firstnum property with said number
// until user inputs an operator
// when user inputs an operator, create a new property for the calculation object called operator and store the input operator as it's value
// if the user inputs another operator, replace the operator property with a the new one
// until user inputs another number
// when user inputs a number, repeat the firstnum property logic but with a new property called secondnum
// until user inputs another operator or equals
// if user inputs another operator
// store the result of the in the firstnum property and display it on the calculator display
// and store the operator in the operator property
// else just store the result in the fistnum property and display it
// if user presses poweroff, all the object is removed
// else if user inputs undo, the move back to the previous step?

function calculate ()

// Operator functions

function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

// Operate function

function operate(operator, num1, num2) {
	switch (operator) {
		case add:
			return add(num1, num2);
			break;
		case subtract:
			return subtract(num1, num2);
			break;
		case multiply:
			return multiply(num1, num2);
			break;
		case divide:
			return divide(num1, num2);
	}
}

// Display function
 
