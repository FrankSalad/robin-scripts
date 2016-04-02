// ==UserScript==
// @name         Robin Tap To @
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Tap username to @ mention them
// @author       omegaworks
// @match        https://www.reddit.com/robin/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var chatinput = $('#robinChatInput input[type="text"]');
    setInterval(function(){
        var a=$('.robin--username').not('.tap-to-at');
        a.addClass('tap-to-at');
        a.click(function(){
            var u=$(this).text();
            chatinput.val('@' + u);
        });
    }, 100);
})();
