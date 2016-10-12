const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], function(err, list) {
    "use strict"
    const ext = '.' + process.argv[3];
    list.forEach(function(file) {
        if (path.extname(file) == ext) {
            console.log(file);
        } 
    });
});
