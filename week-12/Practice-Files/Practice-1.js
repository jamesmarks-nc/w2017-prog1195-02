function btnTotal_onclick()
{
	// assign textbox elements to variables for easier access
	var subtotalTextbox = document.getElementById("txtSubtotal");
	var taxRateTextbox = document.getElementById("txtTaxRate");
	var totalTextbox = document.getElementById("txtTotal");
	
	var subtotal = parseFloat(subtotalTextbox.value);
	var taxrate = parseFloat(taxRateTextbox.value) / 100;


	var newTotal = calcTotal(subtotal, taxrate);

	totalTextbox.value = newTotal;
	
}

function calcTotal(subTotal, taxRate) {

	var taxAmount = subTotal * taxRate;
	var newTotal = subTotal + taxAmount;

	return newTotal;

}