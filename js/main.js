/**
 * Created by adb on 22/03/17.
 */
function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var value = getParameterByName('q');

if (value) {
    var html = document.querySelector("html");
    html.setAttribute('style', "-webkit-transition: all 0.2s ease-in-out !important; -moz-transition: all 0.2s ease-in-out !important;-o-transition: all 0.2s ease-in-out !important;transition: all 0.2s ease-in-out !important;margin-top: 70px !important;position: relative !important;");

    var body = document.querySelector('body');
    var iframe = document.createElement("iframe");
    iframe.id   = "bookstoreAssistant";
    iframe.src = "https://quiet-mountain-63884.herokuapp.com/?term="+value;
    iframe.target='_top';
    iframe.width="100%";
    iframe.height="100%";
    iframe.style="background: transparent;box-shadow: none;overflow: visible;padding: 0px;right: auto;width: 100%;height: 72px;top: 0px;left: 0px;z-index: 2147483647;position: fixed;display: inline;";

    body.appendChild(iframe);
}


