(function () {
    var sites = [
        "www.vg.no",
        "www.tb.no"
    ];

    console.log("test");

    function checkForValidUrl (tabID, changeInfo, tab) {
        for (site in sites) {
            if (tab.url.indexOf(sites[site]) == 0) {
                chrome.pageAction.show(tabID);
            }
        }
    }

    chrome.tabs.onUpdated.addListener(checkForValidUrl);
})();