
/**
 * James Marks
 * 2017-04-16
 * Test 3 - Review (BOM & DOM)
 */

//  9. The 'window' object
// 10. BOM
//     - Determine info about client browser + client computer
//     - Limited document interaction/manipulation
//       * Collections
// 11. DOM
//     - Powerful document interaction/manipulation
//       * HTMLCollection / Nodelist

function window_onload() {

  // assign click events to images and buttons.
  document.getElementById("bomInfoButton").onclick = bomInfoButton_click;
  document.getElementById("bomImage").onclick = bomImageChange_click;
  document.getElementById("domImage").onclick = domImageChange_click;

}

function bomInfoButton_click() {
  // https://www.w3schools.com/js/js_window_screen.asp
  // https://www.w3schools.com/js/js_window_location.asp

  var outputString = "";

  outputString += "Screen Width: " + screen.width + "\n";
  outputString += "Screen Height: " + screen.height + "\n";
  outputString += "Screen AvailWidth: " + screen.availWidth + "\n";
  outputString += "Screen AVailHeight: " + screen.availHeight + "\n";
  outputString += "Screen Colors: " + screen.colorDepth + "\n";
  outputString += "Screen Pixels: " + screen.pixelDepth + "\n";

  document.getElementById("bomInfo").value = outputString;

}

function bomImageChange_click() {
  // find the image and assign it a new src using BOM
  document.images["BOMImage"].src = "img/michaelangelo.png"
}

function domImageChange_click() {
  // find the image and assign it a new src using DOM
  var img = document.getElementById("domImage");
  img.src = "img/leonardo.png";
}