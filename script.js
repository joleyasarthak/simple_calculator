// Get a reference to the display element
const display = document.getElementById('display');

// Function to add input to the display
function addInput(input) {
  display.value += input;
}

// Function to clear the input from the display
function clearInput() {
  display.value = '';
}

// Function to calculate the result of the input
function calculate() {
  display.value = eval(display.value);
}