
/**
 * James Marks
 * 2017-04-16
 * Test 3 - Review (Built-in Objects)
 */


function window_onload() {
  // Date stuff
  document.getElementById("showToday").onclick = showToday_onclick;
  document.getElementById("showNextWeek").onclick = showNextWeek_onclick;
  document.getElementById("showFormattedDate").onclick = showFormattedDate_onclick;
  // Name stuff
  document.getElementById("splitName").onclick = splitName_onclick;
}

function showToday_onclick() {
  var today = new Date();
  document.getElementById("dateOutput").value = today.toString();
}

function showNextWeek_onclick() {
  // getDate(), setDate()
  var today = new Date();
  var nextWeek = today;
  nextWeek.setDate(today.getDate() + 14);
  document.getElementById("dateOutput").value = nextWeek.toLocaleDateString();
}

function showFormattedDate_onclick() {
  // toDateString(), toUTCString(), toLocaleDateString(), toISOString();
  var today = new Date();
  document.getElementById("dateOutput").value = today.toISOString();
}

function splitName_onclick() {

  // get full name and break it apart
  var full = document.getElementById("fullName").value;

  var nameParts = full.split(' ');
  // Note: first name is easy, but last name is not necessarily second name
  var first = nameParts[0];
  var last = nameParts[nameParts.length - 1]; // nameParts.pop();

  // output two names to text boxes.
  document.getElementById("firstName").value = first;
  document.getElementById("lastName").value = last;

}