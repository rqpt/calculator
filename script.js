const calculation = {
	operand1 : [],
	operator : [],
	operand2 : [],
	calculate(operand1, operator, operand2) {
		const calcArr = [operand1, operator, operand2];
		switch (this.operator) {
			case '/':
				divide(calcArr[0], calcArr[2]);
				break;
			case 'x':
				multiply(calcArr[0], calcArr[2]);
				break;
			case '+':
				add(calcArr[0], calcArr[2]);
				break;
			case '-':
				subtract(calcArr[0], calcArr[2]);
		}
	}
};

const operatorSymbs = ['/', 'x', '-', '+'];

// Display
 const displayContent = document.querySelector('.displayContent');

// Regular buttons (\operators and operands)
 const operands = document.querySelectorAll('.button.operand');
 const operators = document.querySelectorAll('button.operator');

// Special buttons
 const undo = document.querySelector('#undo');
 const powerOff = document.querySelector('#powerOff');
 const floatingPoint = document.querySelector('#floatingPoint');
 const equals = document.querySelector('#equals');

// Event listeners for buttons
operands.forEach(operand => operand.addEventListener('click', e => updateOperand1(e.target.innerText)));
operators.forEach(operator => operator.addEventListener('click', e => updateOperator(e.target.innerText)));

undo.addEventListener('click', e => console.log(e.target.innerText));
powerOff.addEventListener('click', e => console.log(e.target.innerText));
floatingPoint.addEventListener('click', e => console.log(e.target.innerText));
equals.addEventListener('click', e => console.log(e.target.innerText));

// Functions
function updateOperator(operator) {
	if ((displayContent.innerText === '' || operatorSymbs.find(arrValue => arrValue === displayContent.innerText)) && (operatorSymbs.find(arrValue => arrValue === operator))) {
		displayContent.innerText = 'Error';
	} else {
		calculation.operator = operator;
		displayContent.innerText = calculation.operator;
	}
}

function updateOperand1(operand) {
	if (calculation.operator !== '') {
		updateOperand2(operand);
	} else if (calculation.operand1.length >= 1) {
		calculation.operand1.push(operand);
		displayContent.innerText = calculation.operand1.join(',');
	}
	if ((displayContent.innerText === '' || operatorSymbs.find(arrValue => arrValue === displayContent.innerText)) && (operatorSymbs.find(arrValue => arrValue === operator))) {
		displayContent.innerText = 'Error';
	} else if (displayContent.innerText / 1 !== undefined) {
		displayContent.innerText += operand.toString();
	} else
		displayContent.innerText = operand;
}
