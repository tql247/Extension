console.log('Background!')

function gotoLink(hex) {
	
	hex = hex.replace(/ /g, "");
	
	tex = "";
	for (i = 0; i < hex.length; i+=2)	{
		hex_phase = hex[i] + hex[i+1]
		tex = tex + String.fromCharCode(parseInt(hex_phase, 16));
	}
	
	let choice = confirm("Go to:\n" + tex);
	if (choice == true) {
		script = "window.open('" + tex + "', '_blank');"
		chrome.tabs.executeScript(null, {
			code: script
		});
	}
}


var contextMenuItem = {
	"id" : "convert",
	"title": "Hex - Decode",
	"contexts": ["selection"]
};


chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickData) {
	if (clickData.menuItemId == "convert" && clickData.selectionText) {
		var hex = clickData.selectionText;
		//run script
		gotoLink(hex);
		
	}
});




chrome.tabs.onActivated.addListener(function callback() {
	chrome.tabs.executeScript(null, {
		file: 'eject.js'
	});
});