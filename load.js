module.exports = function (callback) {
	var walk = require('walk');
	console.log(walk)
	var files = [];

	// Walker options
	// var options = { followLinks: false };
	var options;
	var walker  = walk.walk('symlinks', options);

	// var root = '';
	walker.on('file', function(root, stat, next) {
		// Add this file to the list of files
		console.log('found one')
		files.push(root + '/' + stat.name);
		next();
	});

	walker.on('errors', function (root, nodeStatsArray, next) {
		console.log('er')
		callback('error processing files', null);
	})
	walker.on('end', function() {
		callback(null, files);
	});
}