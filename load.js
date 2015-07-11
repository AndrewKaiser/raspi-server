module.exports = function (folder, callback) {
	var walk = require('walk');
	var files = [];


	var walker  = walk.walk(folder, { followLinks: true });

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