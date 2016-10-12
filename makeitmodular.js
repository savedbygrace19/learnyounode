"use strict"
const fs = require('fs');
const path = require('path');

module.exports = function(dirName, extension, callback) {
    fs.readdir(dirName, function(err, list) {
        if (err) {
            return callback(err, undefined);
        }

        let periodAndExt = '.' + extension;
        var results = [];

        list.forEach(function(file) {
            if (path.extname(file) == periodAndExt) {
                results.push(file);
            }

        });

        callback(err, results);
    });
};
