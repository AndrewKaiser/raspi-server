module.exports = function (folder, callback) {
	var walk = require('walk');
	var path = require('path');
	var files = [];


	var walker  = walk.walk(folder, { followLinks: true });

	walker.on('file', function(root, stat, next) {
		if (stat.name == '.gitignore');
		else files.push(root + '/' + stat.name);
		// console.log(root+ '/' + stat.name)
		next();
	});

	walker.on('errors', function (root, nodeStatsArray, next) {
		var err = 'error processing ' + root + nodeStatsArray;
		callback(err, null);
		next();
	});
	walker.on('end', function() {
		var formatted = [];
		files.forEach(function (file) {
			var dirs = file.split(path.sep);
			dirs = dirs.slice(1, dirs.length);
			formatted.push(path.join.apply(this, dirs));
		});

		callback(null, formatted);
	});
}