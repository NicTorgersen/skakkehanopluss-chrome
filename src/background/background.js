var objectsFound = '...',
    url = '...';

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.fromCS && request.type == "main") {
        chrome.pageAction.show(sender.tab.id);
        chrome.pageAction.setIcon(
            {
                "tabId": sender.tab.id,
                "path": "assets/icon38.png"
            }
        );

        objectsFound = request.objectsFound;
        url = request.url;

        var string = "Fjernet " + objectsFound + " plussartikler fra " + url + ".";

        chrome.notifications.create('', { "type": "basic", "iconUrl": "assets/icon48.png", "title": "Ska'kke ha no' pluss!", "message": string }, function () { console.log("yay, showed notification") });
    }

    if (request.fromPopup && request.type == "getTabId") {
        sendResponse(
            {
                tab: {
                    id: sender.tab.id
                }
            }
        );
    }
});