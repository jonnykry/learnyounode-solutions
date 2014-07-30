
var sum = 0;

var input = process.argv;

for(var i = 2; i < input.length; i++) {
	sum += Number(input[i]);	
}

console.log(sum);
