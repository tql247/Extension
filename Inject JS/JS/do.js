for (loop = 1; loop < 5; loop++) {
	for (k = 1; k < 6; k++) {
		l = 6;
		if (k==5)
			l = 7;
		if (k==4)
			l = 4;
		for (j = 2; j < l; j++) {
			tmp = "gv"+ k.toString() + "$ctl0" + j.toString() + "$group1";
			x = document.getElementsByName(tmp);
			for (i = 0; i < x.length; i++) {
				if (x[i].value!="rd" + Math.floor(Math.random() * (5 - 3 + 1) + 3).toString()) {
					continue;
				}else {
					x[i].checked = true;
					break;
				}
			}
		}
	}
	
	final_prec = document.getElementById("gv7_rd" + Math.floor(Math.random() * (4 - 3 + 1) + 3).toString() + "_0");
	final_prec.checked = true;
}

confirm_click = document.getElementById("btnTiepTuc");
confirm_click.click();