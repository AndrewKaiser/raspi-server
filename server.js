var time = new Date().getTime(); //record time to boot server

var load = require('./load.js');
var path = require('path')
var express = require('express');

var app = express();

var data_dan = null;
var data_anna = null;
load('symlinks/dan', function (err, file_list) {
	data_dan = file_list;
	console.log('Loaded symlinks')
});
load('symlinks/anna', function (err, file_list) {
	data_anna = file_list;
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
	var query = path.join('symlinks/',req.query.user);
	load(query, function (err, file_list) {
		if (!file_list) res.sendStatus(500);
		else res.json(file_list);
	});
});

app.set('json spaces', 2);
app.use(express.static('static'));
app.use(express.static('symlinks'));