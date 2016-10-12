"use strict"
const http = require('http');

http.get(process.argv[2], function(response) {
    response.setEncoding("utf8");

    let allData = "";

    response.on("data", function(data) {
        allData += data;
    });

    response.on("error", function(error) {
        console.error(error);
    });

    response.on("end", function(end) {
        console.log(allData.length);
        console.log(allData);

        allData = undefined;
    });
});
