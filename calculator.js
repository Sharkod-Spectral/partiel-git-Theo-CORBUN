function initializeCalculator() {
    document.getElementById("calculate").addEventListener("click", calculate);
}

function calculate() {
    const a = Number(document.getElementById("number1").value);
    const b = Number(document.getElementById("number2").value);
    const operation = document.getElementById("operation").value;

    if (operation === "subtract") {
        document.getElementById("result").textContent = subtract(a, b);
    }
}

function add() {
    // Not implemented in this branch
}

function subtract(a, b) {
    return a - b;
}

function multiply() {
    // Not implemented in this branch
}
