require('fs');

module.exports = function(path, filter, callback) {
	fs.readdir(path, function(err, list) {
        if (err)
		return callback(err);

	for (i = 0; i < list.length; i++) {
                if (list[i].indexOf('.' + filter) > -1) {
                        console.log(list[i]);
                }
        }

	callback(null, list);
});


