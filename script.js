const display = document.querySelector('p');
const inputs = document.querySelectorAll('button');

inputs.forEach(input.addEventListener('click', (e) => {
	console.log(e);
}));

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
 
