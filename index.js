const btnEl = document.getElementById("btn");
const loanEl = document.getElementById("loan");
const interestEl = document.getElementById("interest");
const monthsEl = document.getElementById("months");
const resultSpan = document.getElementById("result");

function validateForm() {
  let validateInput = document.querySelector("input");
  if (validateInput.value === "" || validateInput.value === null) {
    alert("Input box must be filled out");
  }

}

function calculate() {
  const loanValue = loanEl.value;
  const interestValue = interestEl.value;
  const monthsValue = monthsEl.value;
  const interest = (loanValue * (interestValue * 0.01)) / monthsValue;
  const totalValue = loanValue / monthsValue + interest;
  resultSpan.innerText = totalValue.toFixed(2);
  const nameField = validateForm();
  return nameField;
}

btnEl.addEventListener("click", calculate);
