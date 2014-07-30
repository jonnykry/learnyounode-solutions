fs = require('fs');

var path = process.argv[2];
var filter = process.argv[3];

fs.readdir(path, function(err, list) {
	for(i = 0; i < list.length; i++) {
		if(list[i].indexOf('.' + filter) > -1) {
			console.log(list[i]);
		}
	}
});

