"use strict"
const http = require('http');
const through2 = require('through2-map');

const server = http.createServer(function(req, resp) {
    if (req.method == 'POST') {
        let body = "";
        req.on('data', function(data) {
            body += data.toString().toUpperCase();
        });

        req.on('end', function(end) {
            resp.writeHead(200, {'Content-type': 'text/html'});
            resp.end(body);
        });
    }
});

server.listen(process.argv[2]);
