'use strict';
const http = require('http');
const fs = require('fs');
const portNumber = process.argv[2];
const fileToServe = process.argv[3];

let server = http.createServer(function(request, response) {
    response.writeHead(200, { 'content-type': 'text/plain' });
    fs.createReadStream(fileToServe).pipe(response);
});
server.listen(portNumber);
