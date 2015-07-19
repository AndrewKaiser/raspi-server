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
	});

	$('.icon').hover(function () {
		console.log('thios')
		// this.style.border-radius = '25px'
	},function () {

	})

	// $('#left').hover(function () {
	// 	var left = document.getElementById('mural-left');
	// 	left.style.display = 'block';
	// 	// $('#mural-left').show();
	// },
	// function () {
	// 	var left = document.getElementById('mural-left');
	// 	left.style.display = 'none';
	// });
	// $('#right').hover(function () {
	// 	var right = document.getElementById('mural-right');
	// 	right.style.display = 'block';
	// 	// $('#mural-left').show();
	// },
	$("left").asEventStream('mousemove')
		.filter(function(v) { 
			var x = v.clientX;
			var y = v.clientY;
			console.log(v)
			return x > 100 })
		.onValue(function(v) {
		console.log("we are over 100: " + v);
	});

	$('#right').hover( function () {
		show('mural-right')
	},
	function () {
			hide('mural-right')
	})
	$('#left').hover( function () {
		show('mural-left')
	},
	function () {
			hide('mural-left')
	})
	var bacon = $('body').asEventStream('mousemove')
			.filter(function (v) {
				console.log(v)
				return true;
			})
	$("body").asEventStream('mousemove')
     .filter(function(v) { return v > 100; })
     .onValue(function(v) {
          console.log("we are over 100: " + v);
     });
	var blur = $(window).asEventStream('blur').map(function() {
  return false;
});
var focus =  $(window).asEventStream('focus').map(function() {
  return true;
});
var focused = focus.merge(blur).toProperty(true);
	// $('#left').on('mouseenter', function () {
	// 	show('mural-left')
	// })
	// $('#right').on('mouseleave', function () {
	// 	hide('mural-right')
	// })
	// $('#left').on('mouseleave', function () {
	// 	hide('mural-left')
	// })


	// function () {
	// 	var right = document.getElementById('mural-right');
	// 	right.style.display = 'none';
	// });
	// $('#mural-left').hover(function () {
	// })
	loadSvg(function () {
		adjust();
	})
	$(window).resize(function() {
		adjust();
	});
});
function setHover(id) {
	$('body').click(function () {
		console.log($(id))
	})
	// $(id).hover(function () {
	// 	console.log('on')
	// }, function () {
	// 	console.log('off')
	// })
}
function show(id) {
	// console.log('show')
	var selected = document.getElementById(id);
	var link = '';
	if (id == 'mural-left') {link = 'left'}
	if (id == 'mural-right') {link = 'right'}
	var divlink = document.getElementById(link);
	selected.style.display = 'block'
	divlink.style.opacity = 100;
}
function hide(id) {
	// console.log('hide')
	var selected = document.getElementById(id);
	var link = '';
	if (id == 'mural-left') {link = 'left'}
	if (id == 'mural-right') {link = 'right'}
	var divlink = document.getElementById(link);
	divlink.style.opacity = 0;
	selected.style.display = 'none'
}
function adjust() {
	var mural = $('#proportions');
	// var height =  0 - mural.height();
	// mural.css('bottom', height)
	var windowWidth = window.innerWidth;
	var muralWidth = mural.width();
	var side = (windowWidth - muralWidth)/2 + 'px';

	mural.css('left', side);
}