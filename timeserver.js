"use strict"
const net = require("net");

const zeroFill = function(i) {
    return (i < 10 ? '0' : '') + i;
};

let myServer = net.createServer(function(socket) {
    let date = new Date();
    let formattedDate = date.getFullYear() + '-' + 
        zeroFill(date.getMonth() + 1) + '-' + 
        zeroFill(date.getDate()) + " " + 
        zeroFill(date.getHours()) + ":" + 
        zeroFill(date.getMinutes());

    socket.write(formattedDate);
    socket.end("\n");
});

myServer.listen(process.argv[2]);
