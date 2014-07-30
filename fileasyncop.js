var fs = require('fs');

fs.readFile(process.argv[2], function(err, data) {
	if (!err) {
		var str = data.toString();
		var strsplit = str.split('\n');
		console.log(strsplit.length - 1);
	}	
});