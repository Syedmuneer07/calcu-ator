// Get the display element by its ID
let display = document.getElementById('display');
// Variable to store the current input
let currentInput = '';
// Function to clear the last entered digit
function clearEntry() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}
// Function to append a number to the current input
function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}
// Function to append an operation (+, -, *, /) to the current input
function appendOperation(operation) {
  currentInput += operation;
  updateDisplay();
}
// Function to perform the calculation and update the display
function calculate() {
  try {
    // Use eval to evaluate the current input and convert the result to a string
    currentInput = eval(currentInput).toString();
    updateDisplay();
  } catch (error) {
    // Handle errors by displaying 'Error' on the calculator
    display.innerText = 'Error';
  }
}
// Function to clear the entire input and update the display
function clearDisplay() {
  currentInput = '';
  updateDisplay();
}
// Function to update the display with the current input
function updateDisplay() {
  display.innerText = currentInput;
}
