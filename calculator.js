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
}

/**
 * Addition operation
 */
function add(a, b) {
    return a + b;
}

function subtract() {
    // Not implemented in this branch
}

function multiply() {
    // Not implemented in this branch
}
