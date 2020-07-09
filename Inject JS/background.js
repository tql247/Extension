console.log('Background!')
// chrome.browserAction.onClicked.addListener(function (tab) {
	// chrome.tabs.executeScript(tab.ib, {
		// file: 'inject.js'
	// });
	
// });

chrome.runtime.onConnect.addListener(function(port) {
	console.log("Connected with popup.js");
	port.onMessage.addListener(function(msg) {
		if (msg == 'like')	{
			chrome.tabs.executeScript(port.ib, {
				file: 'JS/like.js'
			});
		}
		else if (msg == 'find')	{
			chrome.tabs.executeScript(port.ib, {
				file: 'JS/find.js'
			});
		}
		else if (msg == 'else') {
			chrome.tabs.executeScript(port.ib, {
				file: 'JS/Appreciate.js'
			});
		}
		else if (msg == 'do') {
			chrome.tabs.executeScript(port.ib, {
				file: 'JS/do.js'
			});
		}
		else if (msg == 'last') {
			chrome.tabs.executeScript(port.ib, {
				file: 'JS/last.js'
			});
		}
		else if (msg == 'unlike'){
			chrome.tabs.executeScript(port.ib, {
				file: 'JS/unlike.js'
			});			
		}
		else if (msg != ""){
			script = "window.location.href = '" + msg + "';";
			chrome.tabs.executeScript(port.ib, {
				code: script
			});
		}
	});
})



 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 