if (window.location.href.includes('meirenwow')) {
	for (var i = 0; i < document.getElementsByClassName('w-100 lazy').length; i++) {
		document.getElementsByClassName('w-100 lazy')[i].src = document.getElementsByClassName('w-100 lazy')[i].getAttribute('data-original');
	}
}

if (window.location.href.includes('meirenwow')) {
	for (var i = 0; i < document.getElementsByClassName('card-img-top').length; i++) {
		document.getElementsByClassName('card-img-top')[i].src = document.getElementsByClassName('card-img-top')[i].getAttribute('data-original');
	}
}
// alert("v");