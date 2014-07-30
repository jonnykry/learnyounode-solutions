require('fs');
require('./lslib.js');

var path = process.argv[2];
var filter = process.argv[3];

lslib(path, filter, function(err, list) {
	for (i = 0; i < list.length; i++) {
		console.log(list[i]);
	}
});

