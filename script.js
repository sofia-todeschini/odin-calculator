let firstOperand = null;
let secondOperand = null;
let mainOperator = null;

createOperatorButton = (operator) => {
    const btn = document.createElement("button")
    btn.textContent = operator
    btn.addEventListener("click", () => {
        firstOperand = Number(display.textContent)
        display.textContent = display.textContent + operator;
        mainOperator = operator
        });
    operatorContainer.appendChild(btn)
    }

const numberContainer = document.querySelector("#numbers")
const operatorContainer = document.querySelector("#operators")
const display = document.querySelector("#display")

operate = () => {
    if (mainOperator === "+") return String(firstOperand + secondOperand)
    else if (mainOperator === "-") return String(firstOperand - secondOperand)
    else if (mainOperator === "*") return String(firstOperand * secondOperand)
    else if (mainOperator === "/") return String(firstOperand / secondOperand)
}

for (let i = 9; i >= 0; i--) {
    const numberButton = document.createElement("button")
    numberButton.textContent = i
    numberButton.addEventListener("click", () => {display.textContent = display.textContent + i})
    numberContainer.appendChild(numberButton)
}

const operators = ["+", "-", "*", "/"];
operators.forEach((operator) => createOperatorButton(operator));

const equalsButton = document.createElement("button");
equalsButton.textContent = "=";
equalsButton.addEventListener("click", () => {
    secondOperand = Number(display.textContent.slice((firstOperand + mainOperator).length))
    display.textContent = operate()
});
operatorContainer.appendChild(equalsButton)

const clearButton = document.createElement("button")
clearButton.textContent = "CE"
clearButton.addEventListener("click", () => {
    firstOperand = null;
    secondOperand = null;
    mainOperator = null;
    display.textContent = ""
})
operatorContainer.appendChild(clearButton)

console.log((firstOperand + mainOperator).length)


