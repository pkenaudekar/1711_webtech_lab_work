var newWindow = null;
var oldWindow =null;
var arrRollNo = [];
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
	var form = oldWindow.document.getElementById("frInput");
	var isPresent = false;
	var table = document.getElementById("myTable");
  	/*var row = table.insertRow();
  	var cell1 = row.insertCell(0);
  	var cell2 = row.insertCell(1);
  	var cell3 = row.insertCell(2);
  	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);*/
	var subjectArray=[];
	for(i=0; i < oldWindow.subject.options.length; i++)
	{
		if(oldWindow.subject.options[i].selected)
		{
			subjectArray.push(oldWindow.subject.options[i].value);
		}
	}
	/*cell1.innerHTML = form["fname"].value;
	cell2.innerHTML = form["lname"].value;
	cell3.innerHTML = form["rollno"].value;
	cell4.innerHTML = form["year"].value;	
	cell5.innerHTML = subjectarray;
	//form.submit(); // Submit
    form.reset();  // Reset
    return false; // Prevent page refresh
	*/
	if(arrRollNo.length === 0)
		{
			arrRollNo.push(oldWindow.rollno.value);
		}
	else{
		for(i = 0; i < arrRollNo.length; i++)
			{
				if(arrRollNo[i] == oldWindow.rollno.value)
					{
						isPresent = true;
						oldWindow.alert("This roll number already exists. Please select a new one.");
						break;
					}
			}
		}
	if(isPresent == false)
		{
			var row = table.insertRow();
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			var cell5 = row.insertCell(4);
			cell1.innerHTML = form["fname"].value;
			cell2.innerHTML = form["lname"].value;
			cell3.innerHTML = form["rollno"].value;
			cell4.innerHTML = form["year"].value;	
			cell5.innerHTML = subjectArray;
		}
	//form.submit(); // Submit
	form.reset();  // Reset
	return false; // Prevent page refresh
	
}






