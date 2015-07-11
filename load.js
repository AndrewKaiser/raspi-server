module.exports = function (callback) {
	var walk = require('walk');
	var files = [];

	// Walker options
	var options = { followLinks: true };
	// var options;
	var walker  = walk.walk('symlinks', options);

	// var root = '';
	walker.on('file', function(root, stat, next) {
		if (stat.name == '.gitignore');
		else files.push(root + '/' + stat.name);
		next();
	});

	walker.on('errors', function (root, nodeStatsArray, next) {
		var err = 'error processing ' + root + nodeStatsArray;
		callback(err, null);
		next();
	})
	walker.on('end', function() {
		callback(null, files);
	});
}