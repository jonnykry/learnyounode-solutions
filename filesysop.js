var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var strsplit = str.split('\n');

console.log(strsplit.length - 1);