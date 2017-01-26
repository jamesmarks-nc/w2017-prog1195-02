
var numberTextbox = 
		document.getElementById("txtNumber");

var numbers = [];

function doSomething() {
	var number = parseFloat(numberTextbox.value); 
				// in as "12" --> out as 12

	numbers[numbers.length] = number;
	console.log(numbers);

}
