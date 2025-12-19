/**
 * Initialize calculator behavior
 */
function initializeCalculator() {
    document.getElementById("calculate").addEventListener("click", calculate);
}

/**
 * Handle calculation
 */
function calculate() {
    const a = Number(document.getElementById("number1").value);
    const b = Number(document.getElementById("number2").value);
    const operation = document.getElementById("operation").value;

    if (operation === "multiply") {
        document.getElementById("result").textContent = multiply(a, b);
    }
}

function add() {
    // Not implemented in this branch
}

function subtract() {
    // Not implemented in this branch
}

/**
 * Multiplication operation
 */
function multiply(a, b) {
    return a * b;
}
