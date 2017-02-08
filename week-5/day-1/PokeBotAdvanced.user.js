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


    function doPokes(containerElement) {
      // Get links for the provided container; containerElement is what we call it in this function,
      // but it will refer to whatever variable was given to it when the function was invoked.
      var links = containerElement.getElementsByTagName("a");
      
      var i = 0; //Initialize
      
      while(i < links.length) { // Test
        // temporarily hold the current link
        var current = links[i];
        
        // check if the link is role=button and has an ajaxify attribute that contains "is_hide = 0"
        if(current.getAttribute // confirms that we are allowed to use the getAttribute() method on this link
            && current.getAttribute("role") === "button" 
            && current.getAttribute("ajaxify") // confirms that the ajaxify attribute exists. 
            && current.getAttribute("ajaxify").indexOf("is_hide=0") !== -1) {
              
              // If the link passes the tests, click it! AutoPoke ftw!
              links[i].click();
        }

        i = i + 1; // Increment
      } // End of while() loop

    } // End of function definition


    // do something every 5 seconds.
    setInterval(function() {

      // Get the two containers that contain our poke buttons.
      var liveContainer = document.getElementById("poke_live_new");
      var pokesContainer = liveContainer.nextSibling;

      // and run them through our function above 
      doPokes(liveContainer);
      // Uncomment the next line if you want to stop your debugger to take it one step at a time. (use step into on the doPoke() function calls)
      // debugger;
      doPokes(pokesContainer);


    }, 5000);

})();