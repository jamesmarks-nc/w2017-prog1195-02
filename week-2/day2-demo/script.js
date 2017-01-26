
/* 
Demo File: Working with multi-dimensional arrays.
2016-01-18
*/


var nameTextbox = document.getElementById("txtName");
var streetTextbox = document.getElementById("txtStreet");
var cityTextbox = document.getElementById("txtCity");
var ageTextbox = document.getElementById("txtAge");

var names = ['Mickey Mouse', 'Donald Duck', 'Bugs Bunny'];
var addresses = ['123 Fantasy Way', '555 Quack Street', '567 Carrot Street'];
var cities = ['Anaheim','Mallard','Rascal'];
var ages = [73, 65, 58];

function findInfo() {
	// Get user input
	var input = nameTextbox.value;
	// Find user's input in the names array 
	var index = names.indexOf(input);
	// Find other information at the same index
	var address = addresses[index];
	var city = cities[index];
	var age = ages[index];

	// Output variables to textboxes.
	streetTextbox.value = address;
	cityTextbox.value = city;
	ageTextbox.value = age;

}


function sumOfAges() {

	var sum = 0;

	for(var i = 0; i < ages.length; i = i + 1) {
		sum = sum + ages[i];
	}

	alert('Total life experience: ' + sum);

}

function addCharacter() {

	var newName = nameTextbox.value;
	var newStreet = streetTextbox.value;
	var newCity = cityTextbox.value;
	var newAge = parseInt(ageTextbox.value);

	// names[names.length] = newName;
	// addresses[addresses.length] = newStreet;
	// cities[cities.length] = newCity;
	// ages[ages.length] = newAge;

	names.push(newName);
	addresses.push(newStreet);
	cities.push(newCity);
	ages.push(newAge);

}

















