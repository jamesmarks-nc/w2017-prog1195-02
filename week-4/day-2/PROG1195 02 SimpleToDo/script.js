
var outputTextbox = document.getElementById("txtOutput");
var toDoTextbox = document.getElementById('txtToDo');
var completeTextbox = document.getElementById('txtComplete');

var toDoList = [ 
	"Take out trash", 
	"Do laundry" 
	];
var toDoDone = [ 
	false, 
	false ];

function addTodo() {
  
  	// grabbing user input
  	var newToDo = toDoTextbox.value;
 
 	// add to our array
 	toDoList[toDoList.length] = newToDo;
 	toDoDone[toDoDone.length] = false;

}

function markComplete() {
	var doneToDo = completeTextbox.value;

	for(var index = 0; index < toDoList.length; index++) {
		if(toDoList[index] === doneToDo) {
			toDoDone[index] = true;
			break;
		}
	}


}

function listToDos() {

	outputTextbox.value = "";
	// Initialize, Test, Increment
	for (var i = 0; i < toDoList.length; i = i + 1) {

		var doneText = toDoDone[i] ? "Done" : "Not Done";

		outputTextbox.value += toDoList[i] 
							+ ' [' +  doneText + ']\n';
	
	}
 
}


function clearDone() {
 
}

function quickSort() {
 
}











