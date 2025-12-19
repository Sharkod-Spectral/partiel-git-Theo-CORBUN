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

    if (operation === "add") {
        document.getElementById("result").textContent = add(a, b);
    }

    if (operation === "subtract") {
        document.getElementById("result").textContent = subtract(a, b);
    }

    if (operation === "multiply") {
        document.getElementById("result").textContent = multiply(a, b);
    }
}

/**
 * Addition operation
 */
function add(a, b) {
    return a + b;
}

/**
 * Subtraction operation
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Multiplication operation
 */
function multiply(a, b) {
    return a * b;
}
