$(document).ready(function () {
	$('.links').click(function () {
		var getLinks = '/api/links?tool=' + this.id;
		$.get(getLinks, function ( links ) {
			$('#detail').children().clone().appendTo('#popup');
			var ul = document.getElementById('list');
			for (key in links) {
				var li = document.createElement('li');
				var a = document.createElement('a');
				a.href = links[key];
				a.appendChild(document.createTextNode(key));
				li.appendChild(a);
				ul.appendChild(li);
			}
		});
		$('#popup').show();
		$('#backdrop').show();
	});

	$('#backdrop').click(function () {
		var popup = document.getElementById('popup');
		var backdrop = document.getElementById('backdrop');
		$(popup).children().each(function() {
			$(this).val = "";
		});
		$(popup).hide();
		$(backdrop).hide();
		popup.innerHTML = "";
	})
});