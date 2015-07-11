var script = document.getElementById('client');
var request = '/api/symlinks?user=' + script.getAttribute('user');
$.get(request, function (response) {
	makeTable(response);
});


function makeTable(list) {
	var table = document.getElementById('fileTable');
	// var tableBody = document.getElementById
	var tableFrag = document.createDocumentFragment();
	for (var r = 0; r < list.length; ++r) {
		var row = list[r];
		var tr = document.createElement('tr');
		var td = document.createElement('td');
		tr.appendChild(document.createTextNode(row));
		// tr.appendChild(td);
		tableFrag.appendChild(tr);
	}
	table.appendChild(tableFrag);
}