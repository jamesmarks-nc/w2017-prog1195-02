
// For displaying output
var outputTextbox = document.getElementById("txtOutput");

// For getting input
var toDoTextbox = document.getElementById('txtToDo');
var completeTextbox = document.getElementById('txtComplete');

// Sample data - parallel arrays
var toDoList = [ "Take out trash", "Do laundry" ];
var toDoDone = [ false, false ];

function addTodo() {
  
  	// grabbing user input
  	var newToDo = toDoTextbox.value;
 
 	// add to our array
 	toDoList[toDoList.length] = newToDo;
 	toDoDone[toDoDone.length] = false;

 	toDoTextbox.value = "";

 	listToDos();

}

function markComplete() {
	var doneToDo = completeTextbox.value;

	for(var index = 0; index < toDoList.length; index++) {
		if(toDoList[index].toLowerCase() === doneToDo.toLowerCase()) {
			toDoDone[index] = true;
			break;
		}
	}

	completeTextbox.value = "";

 	listToDos();

}

function listToDos() {

	outputTextbox.value = "";
	// Initialize, Test, Increment
	for (var i = 0; i < toDoList.length; i = i + 1) {

		var doneText = toDoDone[i] ? "[X]" : "[ ]";

		outputTextbox.value += doneText + ' ' + toDoList[i] + '\n';
	
	}
 
}


function clearDone() {

	// two new arrays to hold only unfinished todo information
	var newList = [];
	var newDone = [];

	var i = 0; // Initialize control (counter) variable 
	while(i < toDoDone.length) { // Test control variable

		if(toDoDone[i] === false) {
			newList[newList.length] = toDoList[i];
			newDone[newDone.length] = false;
		}

		i = i + 1; // Change (increment) control variable
	}

	// replace old lists (arrays) with the new lists (arrays).
	toDoList = newList;
	toDoDone = newDone;

	// re-render our list
	listToDos();

}

function quickSort() {

	// two new arrays to hold sorted todo information
	var newList = [];
	var newDone = [];

	// loop through original arrays finding completed todos and put them
	// at the top of the new list
	for(var i = 0; i < toDoList.length; i++) {
		if(toDoDone[i] === true) {
			newList[newList.length] = toDoList[i];
			newDone[newDone.length] = toDoDone[i];
		}
	}

	// loop through original arrays finding incomplete todos and put them
	// at the bottom of the new list
	for(var i = 0; i < toDoList.length; i++) {
		if(toDoDone[i] === false) {
			newList[newList.length] = toDoList[i];
			newDone[newDone.length] = toDoDone[i];
		}
	}

	// reassign our original arrays to use the new sorted lists.
	toDoDone = newDone;
	toDoList = newList;

	// re-render our todo list to the textbox.
	listToDos();
 
}



listToDos();
