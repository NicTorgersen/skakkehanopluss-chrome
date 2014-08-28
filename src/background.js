var objectsFound = 0,
    url = '';

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.fromCS) {
        chrome.pageAction.show(sender.tab.id);

        objectsFound = request.objectsFound;
        url = request.url;
    }
});