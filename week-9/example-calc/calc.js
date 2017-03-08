var calcState = {
  previousValue: null,
  activeOperation: null,
}

var txtNumber = document.getElementById("currentNumber");

function handleDigitClick(digit) {
  if(txtNumber.value === '0') txtNumber.value = '';
  txtNumber.value += digit;
}

function handleDotClick() {
  if(txtNumber.value.indexOf('.') === -1) {
    txtNumber.value += '.';
  }
}

function handlePreviousOperation() {
  var number = parseFloat(txtNumber.value);
  if(calcState.previousValue !== null && calcState.activeOperation !== null) {
    var operation = calcState.previousValue + calcState.activeOperation + number
    calcState.previousValue = eval(operation);
    document.getElementById('peek').innerText = operation + "=" + calcState.previousValue;
  } else {
    calcState.previousValue = number;
  }
}

function showResult() {
  if(operator === '=') {
    txtNumber.value = calcState.previousValue;
    calcState.previousValue = null;
    calcState.activeOperation = null;
  } else {
    calcState.activeOperation = operator;
  }
}

function handleOperatorClick(operator) {
  var number = parseFloat(txtNumber.value);
  handlePreviousOperation();
  txtNumber.value = "0";
  showResult();
}
