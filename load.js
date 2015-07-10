module.exports = function (callback) {
	var walk = require('walk');
	console.log(walk)
	var files = [];

	// Walker options
	// var options = { followLinks: false };
	var options;
	var walker  = walk.walk('./symlinks', options);

	var root = '/var/www';
	walker.on('file', function(root, stat, next) {
		console.log('found one');
		// Add this file to the list of files
		files.push(root + '/' + stat.name);
		next();
	});

	walker.on('errors', function (root, nodeStatsArray, next) {
		callback('error processing files', null);
	})
	walker.on('end', function() {
		console.log(files);
		callback(null, files);
	});
}