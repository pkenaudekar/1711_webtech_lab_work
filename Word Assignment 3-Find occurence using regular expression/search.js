function StringSearch(event) {
	event.preventDefault();	 
	//var sen = $.trim($("#sentance").val());
	var sen = document.getElementById("sentance").value;
	var word = document.getElementById("search").value;	
	var patt = new RegExp(word, 'ig')
	var res = sen.replace(patt,'<mark>$&</mark>');
	document.getElementById("results").innerHTML = res;
}
