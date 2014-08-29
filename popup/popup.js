var backgroundPage = chrome.extension.getBackgroundPage(),
    counter = document.getElementById('number'),
    url = document.getElementById('url');

var tab = {
    id: 0
};

chrome.runtime.sendMessage({ fromPopup: true, type: 'getTabId' }, function (response) {
    tab.id = response.tab;
});

console.log(tab);



    
counter.innerHTML = backgroundPage.objectsFound;
url.innerHTML = backgroundPage.url;