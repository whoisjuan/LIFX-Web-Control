// alert(window.location);
window.location = chrome.extension.getURL('libs/chrome-ex-oauth2/oauth2.html') + window.location.href.substring(window.location.href.indexOf('?'));
// return false;
// alert(window.newUrl);

