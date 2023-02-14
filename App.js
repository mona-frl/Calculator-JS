
//the numbers
const numbers = document.getElementsByClassName("number");
//the operators
const operators = document.getElementsByClassName("operator");
//calculate result
const result = document.getElementsByClassName("result");
//backspace
const backspace = document.getElementsByClassName("backspace");
//clear
const clear = document.getElementsByClassName("clear");
//display
const display = document.getElementsByClassName("display");

//current value array
let currentValue = [];
//display value
let displayValue = 0;

//opetator clicked
let operatorClicked;

display[0].innerText = displayValue;

//for everytime the click is on a number/operator adds to the array of currentvalue 
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', numbersHandler)
}

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', operatorHandler);
}

for (let i = 0; i < result.length; i++) {
    result[i].addEventListener('click', resultHandler)
}

for (let i = 0; i < backspace.length; i++) {
    backspace[i].addEventListener('click', backspaceHandler)
}

for (let i = 0; i < clear.length; i++) {
    clear[i].addEventListener('click', clearHandler)
}

function numbersHandler(event) {
    currentValue.push(event.target.innerText)
    displayValue = currentValue.join('');
    display[0].innerText = displayValue;
}

function operatorHandler(event) {
    operatorClicked = event.target.name;
    currentValue.push(operatorClicked);
    displayValue = currentValue.join('');
    display[0].innerText = displayValue;
}

function resultHandler() {
    results = eval(currentValue.join(''));
    displayValue = results;
    currentValue.splice(0, currentValue.length);
    display[0].innerText = displayValue;
}

function clearHandler() {
    currentValue.splice(0, currentValue.length);
    displayValue = 0;
    display[0].innerText = displayValue;
}

function backspaceHandler() {
    currentValue.pop();
    if (currentValue.length === 0) {
        displayValue = 0
    } else {
        displayValue = currentValue.join('');
    }
    display[0].innerText = displayValue;
}

