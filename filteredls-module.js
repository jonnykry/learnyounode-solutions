var fs = require('fs');
var lslib = require('./lslib.js');

var path = process.argv[2];
var filter = process.argv[3];

lslib(path, filter, function(err, list) {});
