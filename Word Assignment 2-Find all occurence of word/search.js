function StringSearch(event) {
	event.preventDefault();	 
	var sen = document.getElementById("sentance").value;
	var word = document.getElementById("search").value;	
	var replace = '<mark>$&</mark>';
	document.getElementById("results").innerHTML = sen.split(word).join(replace);
	
}
