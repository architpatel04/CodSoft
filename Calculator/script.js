let currentInput = '0';
let operator = null;
let firstOperand = null;
let awaitingNextInput = false;

function clearDisplay() {
    currentInput = '0';
    operator = null;
    firstOperand = null;
    updateDisplay();
}

function appendInput(value) {
    if (currentInput === '0' || awaitingNextInput) {
        currentInput = value;
        awaitingNextInput = false;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function setOperator(op) {
    if (operator !== null) {
        calculateResult();
    }
    firstOperand = parseFloat(currentInput);
    operator = op;
    awaitingNextInput = true;
}

function calculateResult() {
    const secondOperand = parseFloat(currentInput);
    let result;
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = null;
    firstOperand = result;
    awaitingNextInput = true;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').textContent = currentInput;
}
