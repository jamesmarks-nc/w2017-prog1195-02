/**
 * James Marks
 * 2017-04-16
 * Test 3 - Review (Back to Basics)
 */

var globalVariable = "global"; // It's not in a function.

function window_onload() {
  // when attaching an event handler, we do not use the invocation operator (parenthesis) 
  // because we want to reference the function to be used when the event is triggered, not immediately.
  document.getElementById('doDataStuff').onclick = doDataStuff_click; 
  document.getElementById('doStringStuff').onclick = doStringStuff_click; 
  document.getElementById('doArrayStuff').onclick = doArrayStuff_click; 
  document.getElementById('doObjectStuff').onclick = doObjectStuff_click; 

  // When calling a function, the name we use for a variable that we provide for parameter 
  // data doesn't matter to the function being called. It can just use it's defined parameter name.
  var originalParamVariable = "Some example text";
  logParameter(originalParamVariable);

  // This way we can call the function multiple times with multiple values easily, both literal and variable.
  logParameter("Some literal text");

  logParameter(window.location);
  logParameter(300 * 300);


}

function logParameter(param1) {
  // Original variable name is out of scope:
  /// ====> console.log("Original: " + originalParamVariable); // This would cause an error
  // But param1 is a copy or reference to that variable (depending on data type)
  console.log("Parameterized: " + param1);
}

function doDataStuff_click() {
  // let's just output to the console.
  /* For the record
    you can make a multiline comment
    as long as you start with /* and end with */

  // literal: string, number, boolean, array, object
  console.log("a"); // 'a'
  console.log(1);
  console.log(true);
  console.log(["value 1", "value2"]);

  // variables: string, number, boolean, array, object
  var a = "a";
  var one = 1;
  var TRUE = true;
  var array = ["value 1", "value2"];

  // scope
  var functionScopedVariable = "abc";
  console.log("doDataStuff_click: " + functionScopedVariable);

  // We should only use var when initially creating a variable. 
  // We should not (and can not in most other languages) use the declaration keyword to redeclare
  // the same variable name again somewhere else in the same scope.
  a = "b"; // not 'var a = "b"' because we did 'var a = "a"' above.
  one = 2; // not 'var one = 2' because we did 'var a = "a"' above.
  // ... etc.

}

function proveVariableScope() {
  console.log("proveVariableScope: " + functionScopedVariable);
}

function doStringStuff_click() {
  // Declare and initialize a couple of strings
  var myString = "Powerlevel 9000!!!";
  var myOtherString = "9 million!!!";

  // Output the length of the strings.
  console.log("First String length: " + myString.length);
  console.log("Other String length: " + myOtherString.length);

  // Put strings together (some terms for this are append and concatenate)
  console.log("No space: " + myString + myOtherString);
  console.log("With space: " + myString + ' ' + myOtherString);

  // Break strings apart (into an array of strings)
  var stringArray = myString.split(" "); // Splitting on a single space.
  console.log("Original is unchanged: " + myString);
  console.log("But we have created a new array from it's parts: ");
  console.log(stringArray);
  console.log("And we can use the array parts with other data to put together a new string.");
  var newString = stringArray[0] + ' ' + myOtherString; // Higher power level 
  console.log("New string: " + newString);

  // Searching strings is just a matter of finding the index where a substring occurs.
  // Note that you don't need complete matches and that the first character's index is what you get back.
  console.log("9000 is at: " + myString.indexOf("9000"));
  console.log("90 is also at: " + myString.indexOf("90"));
  console.log("!!! is at: " + myString.indexOf("!!!"));
  console.log("!!! is at (in other): " + myOtherString.indexOf("!!!"));
  
  // But if a matching substring does not exist, you get -1 (because zero would correspond to the first element and indexOf() needs to return an integer.)
  console.log("8000 is at: " + myString.indexOf("8000"));
  // <string>.search() works similarly
  console.log("9000 is at: " + myString.search("9000"));
  console.log("8000 is at: " + myString.search("8000"));

  // Take the time to also learn about the other string methods: substring(), substr(), replace(), toUpperCase(), toLowerCase(), etc.
  /// Refer to: https://www.w3schools.com/js/js_string_methods.asp

  /*** Immutable ***/
  // A note that Javascript strings are "immutable". This means that when you 'change' the value of a string variable, you are 
  // actually writing an entirely new string to memory... the original value is left in memory until the garbage collector has
  // an opportunity to erase it permanently. This can have performance implications in some applications.

}

function doArrayStuff_click() {
  // 3 ways to set up new arrays.
  
  // Method #1: empty constructor followed by individual element assignments.
  var a1 = new Array(); 
  a1[0] = "value 1";
  a1[1] = "value 2";
  // ...
  // Method #2: constructor with parameters.
  // Note: a single numeric parameter does not create an array with a single numeric element, instead it creates an array with a number undefined parameters corresponding to the numeric parameter.
  var a2 = new Array("value 1", "value 2"); 
  // Method #3: array literal syntax. This is the most predictable syntax as whatever you put inside the square brackets (comma separated) will always be assigned to the elements of the array in the order in which they are provided.
  var a3 = ["value 1", "value 2"]; 

  // Since we provided the same element values each time, all 3 arrays will appear to be the same.
  console.log(a1);
  console.log(a2);
  console.log(a3);

  // putting an array together into a string is a piece of cake. Just have to provide a "glue" parameter to show
  // how you want to delimit your resulting string.
  var newStringFromArray = a1.join(', '); // Creates a commas separated string of values... try changing the comma to something else, like a dash or an underscore, what happens?
  // Notice how this is the opposite of <string>.split()
  var backToArray = newStringFromArray.split(', '); // Same delimiter results in an array that looks suspiciously like the original.

  // Length tells you how many elements exist in your array. This will always be one more than the last element currently in your array.
  console.log(a1.length);
  console.log(a1[a1.length - 1]);

  // to add an element to the end of an array:
  a1.push("value 3");
  console.log(a1);
  // ... or we can use length, since it will always refer to the next element in an array.
  a1[a1.length] = "value 4";
  console.log(a1);

  // to remove an element from the end of an array:
  var removedElement = a1.pop();

  console.log(a1);
  console.log(removedElement)

  // Arrays (and objects) are assigned and managed by reference. 
  // If you assign one array to the other, it refers to the same data in memory. Affecting one changes the other.
  var a4 = a1;
  console.log(a1);
  a4.push("added with a4");
  console.log(a1);
  a1.push("added with a1");
  console.log(a4);


  // We can use indexOf on an array too, but it works differently.
  // indexOf() on an array finds an exact match within its elements, 
  // this means that we cannot search "added" alone and find something in a1 (we just put two elements that use this word)
  console.log("Searching for 'added': " + a1.indexOf('added'));
  // we must find a full match for the value of the elements in the array.
  console.log("Searching for 'added with a4': " + a1.indexOf('added with a4'));

  // Note: Javascript arrays allow for mixed data types. However, this is generally considered to be bad practice.

}

function doObjectStuff_click() {
  // All non-intrinsic javascript data is derived from "object"
  // intrinsic are the basic data types: string, number, and boolean

  // we can create a new object quite easily. Just declare an empty object and add some properties and methods.
  var myObject = new Object();
  // we can add and remove properties and methods to any object at whim just by using a dot operator and assigning a new value.
  myObject.someProperty = "some property value";
  myObject.someMethod = function() { alert("some method action"); }
  
  // then we can use them like any variable or function - the difference is that they "belong" to the object now, so we access them with the dot operator.
  console.log(myObject.someProperty);
  myObject.someMethod();

  // The alternative shorthand way to define an object is using object literal notation:
  var myOtherObject = {
    someProperty: "some other property value",
    someMethod: function() { alert("some other method action"); } 
  }
  // Object literal notation is very similar to JSON, which is a commonly used format for data transfer.
  // However, in JSON, we would not be able to define behavior (aka. methods/functions) like we can in Javascript.
  // JSON is purely for data exchange.



}