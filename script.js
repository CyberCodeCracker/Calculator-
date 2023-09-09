let firstNumber;
let secondNumber;
let operator;

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
    secondNumber === 0 ? console.error("Invalid operation", undefined) : firstNumber / secondNumber;
}

// Takes an operator and performs that operation on two numbers
function operate(operator, firstNumber, secondNumber) {
    switch (operator) {
        case '+':
            return add(firstNumber, secondNumber);
        case '-':
            return subtract(firstNumber, secondNumber);
        case '*':
            return multiply(firstNumber, secondNumber);
        case '/':
            return divide(firstNumber, secondNumber);
        default:
            console.Log("Invalid operator");
            return undefined;
    }
}

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let current = button.value;
    })
}
)


