var backgroundPage = chrome.extension.getBackgroundPage(),
    counter = document.getElementById('number'),
    url = document.getElementById('url');
    
counter.innerHTML = backgroundPage.objectsFound;
url.innerHTML = backgroundPage.url;