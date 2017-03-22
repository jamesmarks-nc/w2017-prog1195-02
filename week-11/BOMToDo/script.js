

//TODO: Use BOM objects to get form inputs

// Add click handler to form button.


var outputList = document.getElementById("todoList");

var toDoList = [ 
  { description: "Take out trash", done: false },
  { description: "Do laundry", done: false },
];

function addTodo() {
  
  //TODO: Ensure text box has some kind of value.

  toDoList.push({
    description: toDoTextbox.value,
    done: false,
  });

  toDoTextbox.value = ""; // Clear textbox.

  console.log("Added new todo: " + toDoTextbox.value);
  listToDos();

}

// TODO: Complete this method.
function listToDos() {

  // clear all todos in the list to start fresh.
  outputList.innerHTML = '';

  for (var i = 0; i < toDoList.length; i++) {
    // Get a reference to the array element and update the code below.

    // make new HTML element to display todo info
    var newListItem = document.createElement("li");
    // update it's text to show the todo description.
    
    // make sure that if it is complete, this is displayed. (I'll use a CSS class to keep it simpler.)

    // add the new todo item to the parent ToDo list UL element on the page.
    outputList.appendChild(newListItem);

    // also hook it to a "toggleComplete" method

  }

}

// TODO: write the below methods

function toggleComplete() {
  // toggle a class that makes a todo look complete and update the todo list.
}

function clearDone() {
  
  listToDos();
}

function quickSort() {
  
  listToDos();
}
