/**
 * Created by adb on 22/03/17.
 */

var oldLocation = window.location.href;
setInterval(function() {
    if(location.href != oldLocation) {
        // do your action
        launch_assistant()
        oldLocation = window.location.href
    }
}, 500); // check every second


launch_assistant();

function launch_assistant() {
    var value = null;

    if (window.location.href.indexOf('google.com') != -1) {
        value = window.location.href.match(/q=([^&]*)/);
    } else if (window.location.href.indexOf('amazon.com') != -1) {
        value = window.location.href.match(/keywords=([^&]*)/);
    }

    if (value) {
        var html = document.querySelector("html");
        html.setAttribute('style', "-webkit-transition: all 0.2s ease-in-out !important; -moz-transition: all 0.2s ease-in-out !important;-o-transition: all 0.2s ease-in-out !important;transition: all 0.2s ease-in-out !important;margin-top: 70px !important;position: relative !important;");

        var body = document.querySelector('body');
        var iframe = document.createElement("iframe");
        iframe.id   = "bookstoreAssistant";
        iframe.src = "https://quiet-mountain-63884.herokuapp.com/?term="+value[1];
        iframe.target='_top';
        iframe.width="100%";
        iframe.height="100%";
        iframe.style="background: transparent;box-shadow: none;overflow: visible;padding: 0px;right: auto;width: 100%;height: 72px;top: 0px;left: 0px;z-index: 2147483647;position: fixed;display: inline;";

        body.appendChild(iframe);
    }
}


