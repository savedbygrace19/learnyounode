var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);

var chunks = buffer.toString().split('\n');
console.log(chunks.length - 1);