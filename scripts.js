
let display = document.getElementById('display');

// Append number or operator to the display
function appendToDisplay(value) {

    display.value += value;
}

// Clear the entire display
function clearDisplay() {

    display.value = '';
}

// Delete the last character from the display
function deleteLast() {

    display.value = display.value.slice(0, -1);
}

// Calculate and show the result
function calculateResult() {

    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function runSquareRoot() {
    const v = calculateSquareRoot(display.value);
    display.value = v;
    
}

function runSquare() {
    // Hint: Use exponentiation
    const v = calculateSquare(display.value);
    display.value = v;
}

function runReciprocal() {
    // Hint: Reciprocal is 1/x
    const v = calculateReciprocal(display.value);
    display.value = v;
}

document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Handle numbers and basic operators
    if (/\d/.test(key)) {
        appendToDisplay(key);
    } else if (key === '+') {
        appendToDisplay('+');
    } else if (key === '-') {
        appendToDisplay('-');
    } else if (key === '*') {
        appendToDisplay('*');
    } else if (key === '/') {
        appendToDisplay('/');
    } else if (key === 'Enter') {
        event.preventDefault();  // Prevent form submission if Enter is pressed
        calculateResult(); // Calculate result on Enter key
    } else if (key === 'Backspace') {
        deleteLast(); // Delete last character on Backspace key
    } else if (key === 'c') {
        clearDisplay(); // Clear display on c key
    } else if (key === '.') {
        appendToDisplay('.');
    }
});

// TODO: Implement run your functions here
function runSine() {
    const v = sine(display.value);
    display.value = v;
}

function runTangent() {
    const v = tangent(display.value);
    display.value = v;
}

