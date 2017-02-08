
// Note: index.html would have loaded department-employee.js first
  // we are going to use the arrays from that script file just like a database



// 1. Say Hello! (We'll do this together.)
// Output a welcome message for each employee in our database:
// Example:
//     Welcome to the Office Jimmi.

// employees

// Initialize, test, increment
for(var i = 0; i < employees.length; i = i + 1) {
	var emp = employees[i];
	//console.log("Employee at index " + i + " is ", emp);
	var fullname = emp.firstName + emp.lastName;

	console.log("Welcome to the Office " + fullname);
}



// 2. Information Systems Debacle: (Your turn.)
// For employees that work in the ISYS department 
	// (use deptCode)
// Output their name, title and salary.
// BONUS: Keep track of total salary and output that at the end.

console.log("===== Question 2 =====");

var i = 0;
var total = 0;
while( i < employees.length ) {
	var emp = employees[i];

	if(emp.deptCode === "ISYS") {
		console.log(emp.firstName, emp.lastName, emp.salary, emp.title);
		total = total + emp.salary;
	}
	i = i + 1;
}

console.log("Total ISYS salaries paid: " + total);




// Aside... While we're at it, lets learn a **bad** way to write conditionals.


// 3. Bullets:
// Using the boilerplate code provided (in-class), change the code 
// to output a block of data about each of our departments.

for(var index in departments) {
	var dept = departments[index];

	document.write("<h2>" + dept.name + "</h2>");
	document.write("<ul>");
 		document.write("<li> Name: " + dept.name + "</li>");
 		document.write("<li> Code: " + dept.code + "</li>");
 		document.write("<li> Budget: " + dept.budget + "</li>");
	document.write("</ul>");
}



// 4. Disfunctions

// 4a.
// Lets write our first "pure" function.
// if y = x + 3; Solve for y

// y = f(x)

function myFunction(x) {

	var y = x + 3;

	return y;
}



// 4b.
// if y = mx + b, write a function that will solve for y given m, x, and b


function slopeY(m, x, b) {

	var y = (m * x) + b;

	return y;
}

// x = (y - b) / m

function slopeX(y, b, m) {

	var x = (y - b) / m;

	return x;
}


function sayHello(name) {

	return "Hello " + name;
}









