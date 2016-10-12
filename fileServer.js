"use strict"
const http = require('http');
const fs = require('fs');

const fileStream = fs.createReadStream(process.argv[3]);

let server = http.createServer(function(request, response) {
    fileStream.pipe(response);
});

server.listen(process.argv[2]);
