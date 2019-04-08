google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart1);	 
function drawChart1() {
        var data = google.visualization.arrayToDataTable([
          ['Party', 'Total Seat\'s'],
          ['Bahujan Samaj Party',2],
          ['Bharatiya Janata Party',15],
          ['Indian National Congress',68],
          ['Janta Congress Chhattisgarh (J)',5],
          
        ]);

        var options = {
          title: 'Partywise Vote Share',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart1'));
        chart.draw(data, options);
      }

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart2);	 
function drawChart2() {
        var data = google.visualization.arrayToDataTable([
          ['Party', 'Total Seat\'s'],
          ['Bahujan Samaj Party',     2],
          ['Bharatiya Janata Party',      109],
          ['Indian National Congress',  114],
          ['Samajwadi Party', 1],
		  ['Independent', 4],
          
        ]);

        var options = {
          title: 'Partywise Vote Share',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart2'));
        chart.draw(data, options);
      }

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart3);	 
function drawChart3() {
        var data = google.visualization.arrayToDataTable([
          ['Party', 'Total Seat\'s'],
          ['Bharatiya Janata Party',      1],
          ['Indian National Congress',  5],
          ['Mizo National Front', 26],
          ['Independent', 8],
			
        ]);

        var options = {
          title: 'Partywise Vote Share',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart3'));
        chart.draw(data, options);
      }

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart4);	 
function drawChart4() {
        var data = google.visualization.arrayToDataTable([
          ['Party', 'Total Seat\'s'],
          ['Bahujan Samaj Party',     6],
          ['Bharatiya Janata Party',      73],
          ['Communist Party of India (Marxist)',  2],
          ['Indian National Congress',       99],
          ['Bhartiya Tribal Party',2],
			['Rashtriya Lok Dal', 1],
			['Rashtriya Loktantrik Party', 3],
			['Independent', 13],
        ]);

        var options = {
          title: 'Partywise Vote Share',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart4'));
        chart.draw(data, options);
      }

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart5);	 
function drawChart5() {
        var data = google.visualization.arrayToDataTable([
          ['Party', 'Total Seat\'s'],
          ['Bharatiya Janata Party',1],
          ['Indian National Congress',19],
          ['All India Majlis-E-Ittehadul Muslimeen',7],
          ['Telangana Rashtra Samithi',88],['Telugu Desam',2],['All India Forward Bloc',1],['Independent',1],	
          
        ]);

        var options = {
          title: 'Partywise Vote Share',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart5'));
        chart.draw(data, options);
      }

