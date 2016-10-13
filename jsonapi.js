"use strict"
const http = require('http');
const url = require('url');

const server = http.createServer(function(req, resp) {
    if (req.method == 'GET') {
        let urlResult = url.parse(req.url, true);
        let isoTime = JSON.parse(JSON.stringify(urlResult.query));
        let body = "";

        if (urlResult.path.includes("parsetime")) {
            let date = new Date(isoTime.iso);

            body += JSON.stringify({ 
                hour: date.getHours(), 
                minute: date.getMinutes(), 
                second: date.getSeconds()
            });
        }
        else if (urlResult.path.includes("unixtime")) {
            let unixTime = JSON.parse(JSON.stringify(urlResult.query));
            let asMilliseconds = Date.parse(isoTime.iso);
            let date = new Date(isoTime.iso);

            body += JSON.stringify({ 
                unixtime: asMilliseconds
            });
        }
        
        resp.writeHead(200, {'Content-Type': 'application/json'});
        resp.end(body);
    }
});

server.listen(process.argv[2]);
