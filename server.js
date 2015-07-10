var time = new Date().getTime(); //record time to boot server

var load = require('./load.js');
var express = require('express');

var app = express();

var data = null;
load(function (err, file_list) {
	data = file_list;
	console.log('Loaded symlinks')
});

var server = app.listen(80, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log(new Date().getTime() - time + ' milliseconds for express'); //speed
	console.log('raspi server listening at http://%s:%s', host, port);
});
app.get('/', function (req, res) {
	res.sendFile(process.cwd() + '/static/index.html');
});
app.get('/api/symlinks', function (req, res) {
	// res.send('hello');
	res.json(data);
})

app.set('json spaces', 2);
app.use(express.static('static'));