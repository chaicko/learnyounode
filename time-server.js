'use strict';
const net = require('net');
const strftime = require('strftime');

let server = net.createServer(function(socket) {
    socket.end(strftime('%Y-%m-%d %H:%M') + '\n');
});
server.listen(process.argv[2]);
