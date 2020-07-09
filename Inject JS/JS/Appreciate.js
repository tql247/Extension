need = null;
for (i = 0; i < 100; i++) {
	if (document.getElementById("gvMonHoc_lbTinhTrang_" + i) == null)
		break;
	var span = document.getElementById("gvMonHoc_lbTinhTrang_" + i);
	if (span.textContent == 'Chưa đánh giá') {
		prec = span.parentElement.parentElement.childNodes;
		for (j = 0; j < prec.length; j++) { 
			child = prec[j].childNodes
			for (k = 0; k < child.length; k++) {
				if (child[k].textContent == 'Chọn'){
					need = child[k];
					need.click();
					break;
				}
			}
		}
	}
}
