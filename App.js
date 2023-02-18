//display
const display = document.getElementsByClassName("display");

//the array of the value that will do the operation
let value = [];
//displays the value of the operation starting with 0
let displayValue = 0;
//assigns the value of our  display to the display value
display[0].innerText = displayValue;
//creates a variable for the buttonclicked
let buttonClicked;
//creates a variable for the operator clicked when we click on an operator it will generate this variable so we can push to our value array
let operatorClicked;

//deals with the numbers clicked, pushing the numbers to our array and then adds the array to the display using the inner text
function numbersHandler(event) {
    value.push(event.target.innerText)
    displayValue = value.join('');
    display[0].innerText = displayValue;
}
//deals with the operator clicked, this time using the name of our element since the innerText isn't a JS operator then pushes to the value array
function operatorHandler(event) {
    operatorClicked = event.target.name;
    value.push(operatorClicked);
    displayValue = value.join('');
    display[0].innerText = displayValue;
}
//deals with the result, using eval to calculate our array, then clears our array and pushes the result so we can add more calculations to that array
function resultHandler() {
    results = eval(value.join(''));
    displayValue = results;
    value.splice(0, value.length);
    value.push(results);
    display[0].innerText = displayValue;
}
//cleans the array using splice and the lenght of the array | resets the displayval to 0
function clearHandler() {
    value.splice(0, value.length);
    displayValue = 0;
    display[0].innerText = displayValue;
}
//deletes the last item of the array using pop & incase the value was removed completely, updates to show 0 with else if statements
function backspaceHandler() {
    value.pop();
    if (value.length === 0) {
        displayValue = 0
    } else {
        displayValue = value.join('');
    }
    display[0].innerText = displayValue;
}
//deals with the whole operation, choosing the right function to execute with the else if statements
function operationHandler(event) {
    if (buttonClicked === "number") {
        numbersHandler(event);
    } else if (buttonClicked === "operator") {
        operatorHandler(event);
    } else if (buttonClicked === "result") {
        resultHandler(event);
    } else if (buttonClicked === "backspace") {
        backspaceHandler(event);
    } else if (buttonClicked === "clear") {
        clearHandler(event);
    }
}
//initiates the listener using the queryselector to see everytime a button has been clicked inside that div
// then assigns the buttonclicked variable based on the classname and runs the operation function
function init() {


    document
        .querySelector(".calculator")
        .addEventListener("click", (event) => {
            buttonClicked = event.target.className;
            operationHandler(event);
        })
}
init();