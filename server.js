var time = new Date().getTime(); //speed

var express = require('express');

var app = express();
app.set('json spaces', 2);

var datalist = null;
//add function to recursively scan directories for files

var server = app.listen(80, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log(new Date().getTime() - time + ' milliseconds for express'); //speed
	console.log('raspi server listening at http://%s:%s', host, port);
});
app.get('/', function (req, res) {
	res.sendFile(process.cwd() + '/static/index.html');
});


app.use(express.static('static'));

// var http = require("http"),
//     url = require("url"),
//     path = require("path"),
//     fs = require("fs")
//     port = process.argv[2] || 80;

// http.createServer(function(request, response) {

//   var uri = url.parse(request.url).pathname;
//   if (uri == '/') {

//   }
//   var filename = path.join(process.cwd(), 'static', uri);
//   fs.exists(filename, function(exists) {
//     if(!exists) {
//       response.writeHead(404, {"Content-Type": "text/plain"});
//       response.write("404 Not Found\n");
//       response.end();
//       return;
//     }

//     if (uri == '/') filename = path.join(filename,'index.html');

//     fs.readFile(filename, "binary", function(err, file) {
//       if(err) {
//         response.writeHead(500, {"Content-Type": "text/plain"});
//         response.write(err + "\n");
//         response.end();
//         return;
//       }

//       response.writeHead(200);
//       response.write(file, "binary");
//       response.end();
//     });
//   });
// }).listen(parseInt(port, 10));


// console.log(new Date().getTime() - time + ' milliseconds for raw')
// console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");
