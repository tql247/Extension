console.log("popup.js");
var port = chrome.runtime.connect({
      name: "Sample Communication"
});
document.getElementById("like").onclick = function(){
	port.postMessage("like");	
}


document.getElementById("unlike").onclick = function(){
	port.postMessage("unlike");	
}

document.getElementById("find").onclick = function(){
	port.postMessage("find");	
}
linka = "";
document.getElementById("convert2").onclick = function(){
	var hexStr = document.getElementById("convert1").value;
	hexLs = hexStr.replace(/ /g, "");
	
	tex = "";
	for (i = 0; i < hexLs.length; i+=2)	{
		
		hex_phase = hexLs[i] + hexLs[i+1]
		tex = tex + String.fromCharCode(parseInt(hex_phase, 16));
	}
	
	var a = document.getElementById("link");
	a.textContent = tex;
	a.style.display = 'block';
	a.setAttribute("href", tex);
	linka = tex;
}

document.getElementById("link").onclick = function(){
	port.postMessage(linka);
}

document.getElementById("apprec").onclick = function(){
	port.postMessage("else");
	setTimeout(function(){
		port.postMessage("do");
	}, 2000);
	setTimeout(function(){
		port.postMessage("last");
	}, 4000);
	
	var counter = 0;
	var time_loop = document.getElementById("ngv").value;
	if (time_loop > 1)  {
		var i = setInterval(function(){
			counter++;
			if(counter >= time_loop ) {
				clearInterval(i);
			}
			
			port.postMessage("else");
			setTimeout(function(){
				port.postMessage("do");
			}, 2000);
			setTimeout(function(){
				port.postMessage("last");
			}, 4000);
		}, 6000);
	}
}

 // port.onMessage.addListener(function(msg) {
	// if (msg = "run") {
		// //recieve msg from background but cannot display through console.log()
		// document.getElementById("number").textContent = msg;
		// document.getElementById("click").textContent = "Like now";
	// }
// });