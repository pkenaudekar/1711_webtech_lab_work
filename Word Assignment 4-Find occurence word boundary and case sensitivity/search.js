function StringSearch(event) {
	event.preventDefault();	 
	var sen = document.getElementById("sentance").value;
	var word = document.getElementById("search").value;	
	if (document.getElementById("casesensitive").checked == 1)
	{
		if (document.getElementById("wordboundary").checked == 1)
		{
            var patt = new RegExp(("\\b" + word + "\\b"), 'g')
		} 
		else 
		{
			var patt = new RegExp(word, 'g')
		}
    }
	else 
    {
        if (document.getElementById("wordboundary").checked == 1)
		{
            var patt = new RegExp(("\\b" + word + "\\b"), 'ig')
		} 
		else 
		{
			var patt = new RegExp(word, 'ig')
		}
    }	
	var res = sen.replace(patt,'<mark>$&</mark>');
	document.getElementById("results").innerHTML = res;
}
