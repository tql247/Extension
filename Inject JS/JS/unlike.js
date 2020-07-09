
found = 0;
var tag_a = document.getElementsByTagName("a");
for (i = 0; i < tag_a.length; i++) { 
	if (tag_a[i].getAttribute("class") == "_3_16 _6a-y _3l2t  _18vj") {
		tag_a[i].click();
		found++;
	}
}
alert(found + ' was unliked!');
// alert('dmm');