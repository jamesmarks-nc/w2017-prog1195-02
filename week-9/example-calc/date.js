var workingDate = new Date();

var currentDateTextbox = document.getElementById('currentDate');

function displayDate() {
  currentDateTextbox.value = workingDate.toDateString();
}

function decreaseYear() {
  var currentYear = workingDate.getFullYear();
  currentYear = currentYear - 1;
  workingDate.setFullYear(currentYear);
  displayDate();
}
function increaseYear() {
  var currentYear = workingDate.getFullYear();
  currentYear = currentYear + 1;
  workingDate.setFullYear(currentYear);
  displayDate();
}

displayDate();