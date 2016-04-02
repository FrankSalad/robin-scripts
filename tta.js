// ==UserScript==
// @name         Robin Tap To @
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Tap username to @ mention them
// @author       omegaworks
// @match        https://www.reddit.com/robin/
// @grant        none
// @downloadURL http://franksalad.github.io/robin-scripts/tta.js
// @updateURL http://franksalad.github.io/robin-scripts/tta.js
// ==/UserScript==

(function() {
    'use strict';
    clearInterval(window.tapToAt);
    var chatinput = $('#robinChatInput input[type="text"]');
    window.tapToAt = setInterval(function(){
        var a=$('.robin--username').not('.tap-to-at');
        a.addClass('tap-to-at');
        a.click(function(){
            var u=$(this).text();
            chatinput.val(chatinput.val() + '@' + u + ', ');
            chatinput.focus();
        });
    }, 100);
})();
