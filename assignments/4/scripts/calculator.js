const display = document.getElementById("display");
let currentInput = "";
let previousInput = "";
let operator = "";

// Function to update display
function updateDisplay() {
    display.textContent = currentInput || "0";
}

// Number buttons
document.querySelectorAll(".number").forEach(btn => {
    btn.addEventListener("click", () => {
        const num = btn.getAttribute("data-num");
        if (num === "." && currentInput.includes(".")) return;
        currentInput += num;
        updateDisplay();
    });
});

// Operator buttons
document.querySelectorAll(".operator").forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.id === "equals") {
            calculate();
            updateDisplay();
            previousInput = "";
            operator = "";
            return;
        }
        if (currentInput === "") return;
        if (previousInput !== "") calculate();
        operator = btn.getAttribute("data-op");
        previousInput = currentInput;
        currentInput = "";
    });
});

// AC button
document.getElementById("clear").addEventListener("click", () => {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay();
});

// +/- button
document.getElementById("plus-minus").addEventListener("click", () => {
    if (currentInput) currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
});

// % button
document.getElementById("percent").addEventListener("click", () => {
    if (currentInput) currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
});

// Calculate function
function calculate() {
    if (!previousInput || !operator || !currentInput) return;
    const a = parseFloat(previousInput);
    const b = parseFloat(currentInput);
    switch (operator) {
        case "+": currentInput = (a + b).toString(); break;
        case "-": currentInput = (a - b).toString(); break;
        case "*": currentInput = (a * b).toString(); break;
        case "/": currentInput = b !== 0 ? (a / b).toString() : "Error"; break;
    }
}
