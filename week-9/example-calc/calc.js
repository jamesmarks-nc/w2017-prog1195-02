var calcState = {
  previousValue: null,
  activeOperation: null,
}

var txtNumber = document.getElementById("currentNumber");

function handleButtonClick(label) {
  if(!isNaN(parseInt(label))) {
    if(txtNumber.value === '0') txtNumber.value = '';
    txtNumber.value += label;
  } else if(label === '.') {
    if(txtNumber.value.indexOf('.') === -1) {
      txtNumber.value += '.';
    }
  } else {
    var number = parseFloat(txtNumber.value);
    if(calcState.previousValue !== null && calcState.activeOperation !== null) {
      var operation = calcState.previousValue + calcState.activeOperation + number
      calcState.previousValue = eval(operation);
      document.getElementById('peek').innerText = operation + "=" + calcState.previousValue;
    } else {
      calcState.previousValue = number;
    }
    txtNumber.value = "0";
    if(label === '=') {
      txtNumber.value = calcState.previousValue;
      calcState.previousValue = null;
      calcState.activeOperation = null;
    } else {
      calcState.activeOperation = label;
    }
  }
}