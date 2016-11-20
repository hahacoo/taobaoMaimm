function active(tabId) {

	chrome.tabs.get(tabId, function(tab) {

		var id = tab.id,
			url = tab.url

		if(url.indexOf('cart.taobao') != -1 || url.indexOf('cart.tmall') != -1) {
			chrome.pageAction.show(id)
		} else {
			chrome.pageAction.hide(id)
		}
	})

}

chrome.tabs.onActivated.addListener(function(tabInfo) {

	active(tabInfo.tabId)

})

chrome.tabs.onUpdated.addListener(function(tabId) {

	active(tabId)

})