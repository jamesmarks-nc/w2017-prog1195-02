

// Use BOM objects to get form inputs
var form = document.forms[0];
var toDoTextbox = form.elements["txtToDo"];
var addButton = form.elements["addButton"];

// Add click handler to form button.
//addButton.onclick = addTodo;
addButton.addEventListener('click', addTodo);

var outputList = document.getElementById("todoList");

var toDoList = [ 
  { description: "Take out trash", done: true },
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
    var currentToDo = toDoList[i];

    // make new HTML element to display todo info
    var newListItem = document.createElement("li");
    // update it's text to show the todo description.
    newListItem.innerText = currentToDo.description;
    // update some other property to show its index????
    
    // make sure that if it is complete, this is displayed. (I'll use a CSS class to keep it simpler.)
    if(currentToDo.done) {
      newListItem.className = 'done';
    }

    // When this is clicked, run the toggleComplete() function
    newListItem.onclick = toggleComplete;

    // add the new todo item to the parent ToDo list UL element on the page.
    outputList.appendChild(newListItem);

    // also hook it to a "toggleComplete" method
    newListItem.onclick = toggleComplete;
  }

}

// TODO: write the below methods

function toggleComplete() {
  // TEMP: toggle a class that makes a todo look complete and update the todo list.
  // console.log("clicked");
  var clickedItem = this;

  // if(clickedItem.className === 'done') {
  //   clickedItem.className = '';
  // } else {
  //   clickedItem.className = 'done';
  // }

  // to update the todo list we will use a loop to find matching text
  var listItems = document.getElementsByTagName("li");

  for(var i = 0; i < listItems.length; i++) {
    if(listItems[i] === clickedItem) {
      toDoList[i].done = !toDoList[i].done;
    }
  }

  listToDos();
}

function clearDone() {
  
  var newList = [];

  for(var i = 0; i < toDoList.length; i++) {
    if(toDoList[i].done === false) {
      newList.push(toDoList[i]);
    }
  }
  
  toDoList = newList;

  listToDos();
}

listToDos();