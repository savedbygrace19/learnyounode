"use strict"
const http = require("http");

let finalResults = {};
let completionCount = 0;

const completionCallback = function (url, results) {
    finalResults[url] = results;
    completionCount++;

    if (completionCount === 3) {
        console.log(finalResults[process.argv[2]]);
        console.log(finalResults[process.argv[3]]);
        console.log(finalResults[process.argv[4]]);
    }
};

const ourGetter = function (url, completedCallback) {
    let allResults = "";

    http.get(url, function(response) {
        response.setEncoding("utf8");
        response.on("data", function(data) { allResults += data; });
        response.on("error", function(error) { console.error(error); });
        response.on("end", function(end) { completedCallback(url, allResults) });
    });
};

for (let i = 2; i < process.argv.length; i++) {
    ourGetter(process.argv[i], completionCallback);
};
