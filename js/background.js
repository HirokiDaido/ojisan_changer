chrome.browserAction.onClicked.addListener(function(tab){
	chrome.tabs.executeScript(tab.id, {
		file: "./js/onload.js"
	});
})