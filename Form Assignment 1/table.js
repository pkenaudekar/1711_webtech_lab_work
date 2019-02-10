// JavaScript Document
function myFunction(event) {
	event.preventDefault();
  	var table = document.getElementById("myTable");
  	var row = table.insertRow();
  	var cell1 = row.insertCell(0);
  	var cell2 = row.insertCell(1);
  	var cell3 = row.insertCell(2);
  	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
  	cell1.innerHTML = document.getElementById("fname").value;
  	cell2.innerHTML = document.getElementById("lname").value;
  	cell3.innerHTML = document.getElementById("rollno").value;
	cell4.innerHTML = document.getElementById("year").value;
	for(i=0;i < subject.length; i++)
		{
			if(subject.options[i].selected)
				{
					if(i!=0)
					{
						cell5.innerHTML += ", ";
					}
					cell5.innerHTML += document.getElementById("subject")[i].value;
				}
				
				
		}
  
}