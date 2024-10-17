let displayValue = "";
let lastInputWasOperator = false;

function appendNumber(number) {
  if (displayValue === "0" && number !== ".") {
    displayValue = number;
  } else {
    displayValue += number;
  }
  lastInputWasOperator = false;
  updateDisplay();
}

function appendOperator(operator) {
  if (displayValue === "") return;

  if (lastInputWasOperator) {
    displayValue = displayValue.slice(0, -3) + ` ${operator} `;
  } else {
    displayValue += ` ${operator} `;
  }

  lastInputWasOperator = true;
  updateDisplay();
}

function clearDisplay() {
  displayValue = "";
  lastInputWasOperator = false;
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent = formatNumber(displayValue) || "0";
}

function formatNumber(value) {
  return value
    .split(" ")
    .map((part) => {
      return !isNaN(part) && part !== ""
        ? Number(part).toLocaleString("id-ID")
        : part;
    })
    .join(" ");
}

function calculate() {
  try {
    let expression = displayValue.replace(/\^/g, "**");

    let result = eval(expression);

    displayValue = result.toString();
    lastInputWasOperator = false;
    updateDisplay();
  } catch (error) {
    alert("Ekspresi tidak valid");
  }
}
