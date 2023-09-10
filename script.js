let firstNumber = '';
let secondNumber = '';
let operator = '';
let currentInput = '';

const currentOperand = document.querySelector('.current-operand');
const previousOperand = document.querySelector('.previous-operand')
const numberButtons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.operators');
const equalButton = document.getElementById('equal-btn');
const clearButton = document.getElementById('clear-btn');
const deleteButton = document.getElementById('delete-btn');

numberButtons.forEach((button) => {
    button.addEventListener('click', () => appendNumber(button.textContent));
});

clearButton.addEventListener('click', () => clearAll());

deleteButton.addEventListener('click', () => deleteNumber());

function appendNumber(number) {
    currentInput += number; // Update currentInput
    if (currentOperand.textContent === '0') {
        currentOperand.textContent = '';
    }
    currentOperand.textContent += number;
}

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (firstNumber === '') {
            firstNumber = currentInput;
            previousOperand.textContent = `${firstNumber} ${button.textContent}`; 
            currentOperand.textContent = '0';
        } else if (secondNumber === '' && currentInput !== '') {
            secondNumber = currentInput;
            const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
            previousOperand.textContent = `${result} ${button.textContent}`; 
            currentOperand.textContent = '0';
            firstNumber = result.toString();
            secondNumber = '';
        }
        operator = button.textContent;
        currentInput = '';
    });
});

equalButton.addEventListener('click', () => {
    if (firstNumber !== '' && currentInput !== '') {
        const result = operate(operator, parseFloat(firstNumber), parseFloat(currentInput));
        currentOperand.textContent = result;
        previoustOperand.textContent = '';
        firstNumber = '';
        secondNumber = '';
        operator = '';
        currentInput = '';
    }
});

function clearAll() {
    firstNumber = '';
    secondNumber = '';
    operator = '';
    currentInput = '';
    currentOperand.textContent = '0';
    previousOperand.textContent = '';
}

function deleteNumber() {
    let length = currentOperand.textContent.length;
    if (length === 1) {
        clearAll();
    } else {
        currentOperand.textContent = currentOperand.textContent.slice(0, length - 1);
        currentInput = currentInput.slice(0, length - 1); // Update currentInput
    }
}

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    if (secondNumber === 0) {
        return currentOperand.textContent = "ERROR!";
    }
    return firstNumber / secondNumber;
}

function operate(operator, firstNumber, secondNumber) {
    switch (operator) {
        case '+':
            return add(firstNumber, secondNumber);
        case '-':
            return subtract(firstNumber, secondNumber);
        case '*':
            return multiply(firstNumber, secondNumber);
        case '%':
            return divide(firstNumber, secondNumber);
        default:
            return currentOperand.textContent = "Invalid Input";
    }
}