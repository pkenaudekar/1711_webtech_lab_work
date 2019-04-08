function StringSearch(event) {
	event.preventDefault();
	var s = new String(document.getElementById('sentance').value+'');
	var ht = new String(document.getElementById('search').value+'');
	//alert(ht);
	//alert(s);
	//var ht = new String(highlightText + '');
	
	if(ht.length == 0) {
		alert('highlightText has zero length!');
		return false;
	}
	//var s = new String(document.getElementById(textareaId).value + '');
	//alert(s);
	var startPos = s.indexOf(ht);
	if(startPos == -1) {
		alert('can\'t find: ' + ht);
		return false;
	}
	document.getElementById('sentance').focus();
	document.getElementById('sentance').setSelectionRange(startPos, startPos + ht.length);
	//return true;	
}




