// var t = $('#evernote');
// console.log(t.attr('class'))
var t = document.getElementsByTagName('*');
var t = document.getElementById('mega');
console.log(t)
$('.links').click(function () {
	var id = this.id;
	console.log('id');



	var id = this.id;
	id = id.substring(this.id.indexOf('-')+1, this.id.length);
	id = parseInt(id)+1;
	var getRow = '/api/row?id=' + (id);
	var getMap = '/api/mappings?id=' + (id);
	var getCWE = '/api/cwe?id=' + (id);
	var getDES = '/api/description?id=' + (id);
	$('#detail').children().clone().appendTo('#popup')
	var detail = document.getElementById('detail');
	$.get(getRow, function ( rule ) {
		makeTable(rule, '#popup .rule')
	});
	$.get(getMap, function( mappings ) {
		makeTable(mappings, '#popup .mappings');
	});
	$.get(getCWE, function ( history ) {
		makeTable(history, "#popup .historyCWE");
	});
	$.get(getDES, function ( description ) {
		description.forEach(function (entry) {
			// make tag for html or text or markdown
			$("#popup .description").append(entry.description);
		});
	});
	// look at top of atlas on evernote!
	// do makeTable() on HistoryCWE as well
	$('#popup').show();
	$('#backdrop').show();
});
