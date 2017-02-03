

// while loop
 var i = 0; // 1. Initialize

while(i < 5) { // 2. Test / Condition
	if(i === 3) {
		console.log("Continuing.");
		continue;
	}
	console.log("Index is: " + i);
	i += 1; // 3. Increment
}


// // do/while loop
var j = 0; // Initialize

do {
	var yn = prompt("Index is " + j + ". Do you want to continue?");
	j = j + 1;
} while(yn === "y"); // Test



// for loop

for (var i = 0; i < 5; i += 1) {
	console.log("Index is: " + i);

	console.log("Something else " + i);
}
















