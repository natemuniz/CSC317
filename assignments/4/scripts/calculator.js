const display = document.getElementById("display");

let current = "0";
let previous = null;
let operator = null;

function updateDisplay() {
    display.textContent = current;
}

function handleNumber(num) {
    if (current === "0" && num !== ".") {
        current = num;
    } else {
        if (num === "." && current.includes(".")) return;
        current += num;
    }
    updateDisplay();
}

function handleOperator(op) {
    if (previous === null) {
        previous = current;
    } else {
        calculate();
    }
    operator = op;
    current = "0";
}

function calculate() {
    const a = parseFloat(previous);
    const b = parseFloat(current);

    switch (operator) {
        case "add": current = (a + b).toString(); break;
        case "subtract": current = (a - b).toString(); break;
        case "multiply": current = (a * b).toString(); break;
        case "divide":
            current = (b === 0) ? "Error" : (a / b).toString(); 
            break;
    }

    previous = null;
    operator = null;
    updateDisplay();
}

// EVENT LISTENERS

document.querySelectorAll(".number").forEach(button => {
    button.addEventListener("click", () => {
        handleNumber(button.dataset.number);
    });
});

document.querySelectorAll(".operator").forEach(button => {
    button.addEventListener("click", () => {
        const action = button.dataset.action;
        if (action === "equals") calculate();
        else handleOperator(action);
    });
});

document.querySelector(".utility[data-action='clear']")
    .addEventListener("click", () => {
        current = "0";
        previous = null;
        operator = null;
        updateDisplay();
    });

document.querySelector(".utility[data-action='negate']")
    .addEventListener("click", () => {
        current = (parseFloat(current) * -1).toString();
        updateDisplay();
    });

document.querySelector(".utility[data-action='percent']")
    .addEventListener("click", () => {
        current = (parseFloat(current) / 100).toString();
        updateDisplay();
    });

// KEYBOARD SUPPORT
document.addEventListener("keydown", e => {
    if (!isNaN(e.key)) handleNumber(e.key);
    if (e.key === ".") handleNumber(".");
    if (e.key === "+") handleOperator("add");
    if (e.key === "-") handleOperator("subtract");
    if (e.key === "*") handleOperator("multiply");
    if (e.key === "/") handleOperator("divide");
    if (e.key === "Enter") calculate();
    if (e.key === "Backspace") {
        current = current.slice(0, -1) || "0";
        updateDisplay();
    }
});
