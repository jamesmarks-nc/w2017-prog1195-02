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

    setInterval(function() {

      // The DOM provides querySelectorAll() which lets you use a CSS selector to grab a bunch of things off of the page.
      // If you're not familiar with CSS selectors yet, here's the breakdown:
          // #poke_live_new ---> selects the element with id='poke_live_new'
              // a[role=button] comes after #poke_live_new, which grabs all poke_live_new's subelements that are <a> elements with a role='button' attribute
              // [ajaxify*='is_hide=0'] *= means value exists within an attribute, so this chooses only elements that have 'is_hide=0' (no quotes) in the ajaxify attribute.
          // Then we place a comma to separate a second CSS selection, which starts with...
          // #poke_live_new + div ---> this means to select #poke_live_new's next HTML sibling as long as it is a div (otherwise nothing will be selected)
              // the rest of hte selector is the same as above, so just a repeat to get the right links out of #poke_live_new + div.
      // If you didn't understand that all in one go, don't worry. CSS takes time.
      // I just wanted to show you how we could accomplish what we did in our original script with less code overall.
      var pokesLinks = document.querySelectorAll("#poke_live_new a[role=button][ajaxify*='is_hide=0'], #poke_live_new + div a[role=button][ajaxify*='is_hide=0']");

      for(var i in pokesLinks) {
          if(pokesLinks[i].click) {
            pokesLinks[i].click();
          }
      }

      // or using functional array methods...
      // pokesLinks.forEach((link) => link.click());

    }, 5000);

})();