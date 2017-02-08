// ==UserScript==
// @name         PokeBot
// @namespace    http://tampermonkey.net/
// @version      0.1 beta
// @description  Try to poke the world!
// @author       Me
// @match        https://www.facebook.com/pokes*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Get the container for our poke buttons.
    var container = document.getElementById("poke_live_new");

    // Getting all <a> tags on the page
    var links = container.getElementsByTagName("a");
    // Set up an array where we put our correct links.
    var newList = [];
    // Loop through original <a> array and add <a role="button"> to newList
    for(var index in links) {
        // Temporary variable to hold the link at the current index.
        var newLink = links[index];
        // If the link has a getAttribute() function
        if(newLink.getAttribute 
           // AND the link has a role attribute of "button"
           && newLink.getAttribute("role") === "button") {
            // Put this link into our new list
          newList[newList.length] = links[index];
        }
    }

    // put our new list of only role=button links back into the original list
    links = newList;

    // Do a separate loop to find links that have the is_hide=0 
    // portion, which is unique to the poke buttons we want to use.
    for(var i = 0; i < links.length; i = i + 1) {
      var currentLink = links[i];
      if(currentLink.getAttribute("ajaxify").indexOf("is_hide=0") !== -1) {
        //if we find a link that has this, we call its .click() method..
        currentLink.click();
      }
    }

})();