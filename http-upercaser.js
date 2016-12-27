'use strict';
const http = require('http');
const portNumber = process.argv[2];

let server = http.createServer(function (req, res) {
    // req is an http.IncomingMessage, which is a Readable Stream
    // res is an http.ServerResponse, which is a Writable Stream

    let body = '';

    // Get the data as utf8 strings.
    // If an encoding is not set, Buffer objects will be received.
    req.setEncoding('utf8');

    // Readable streams emit 'data' events once a listener is added
    req.on('data', (chunk) => body += chunk);

    // the end event indicates that the entire body has been received
    req.on('end', function () {
        res.statusCode = 400;
        if (req.method == 'POST') {
            res.statusCode = 200;
            res.write(body.toUpperCase());
        }
        res.end();
    });
});
server.listen(portNumber);

/*  Official Solution (with thorugh2-map module from NPM)
var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
  if (req.method !== 'POST') {
    return res.end('send me a POST\n')
  }

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(Number(process.argv[2]))
*/