var newWindow = null;
var oldWindow =null;
function saveData(event)
{
	event.preventDefault();

	if(newWindow == null)
	{
		newWindow = window.open("page2.html","Newpage","","");
	}
	else
	{
		newWindow.newPage(event);
	}
}

function newPage(event)
{
	event.preventDefault();
	var oldWindow = window.opener;
	//var page1 = oldWindow.document.getElementById("frInput");
	var form = oldWindow.document.getElementById("frInput");
	
	var table = document.getElementById("myTable");
  	var row = table.insertRow();
  	var cell1 = row.insertCell(0);
  	var cell2 = row.insertCell(1);
  	var cell3 = row.insertCell(2);
  	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var subjectArray=[];
	for(i=0;i<oldWindow.subject.options.length;i++)
	{
		if(oldWindow.subject.options[i].selected)
		{
			subjectArray.push(oldWindow.subject.options[i].value);
		}
	}
	cell1.innerHTML = form["fname"].value;
	cell2.innerHTML = form["lname"].value;
	cell3.innerHTML = form["rollno"].value;
	cell4.innerHTML = form["year"].value;	
	cell5.innerHTML = subjectArray;
	//form.submit(); // Submit
    form.reset();  // Reset
    return false; // Prevent page refresh
}






