function btnSearch_onclick()
{
	// assign textbox elements to variables for easier access
	var searchTextbox = document.getElementById("txtCode");
	var resultTextbox = document.getElementById("txtResult");

	var foundCount = getCountryCount(searchTextbox.value);

	resultTextbox.value = foundCount;
	
}


function getCountryCount(searchText) {

	var countries = [
		"Iceland", 
		"India", 
		"Greenland", 
		"Canada", 
		"Australia", 
		"Columbia", 
		"England"
	];

	var counter = 0;

	for(var i = 0; i < countries.length; i++) {
		var currentItem = countries[i];
		var index = currentItem.indexOf(searchText);
		if(index !== -1) {
			counter = counter + 1;
		}
	}

	return counter;

}