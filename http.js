'use strict';
let url = process.argv[2];
let http = require('http');
http.get(url, function(res) {
    res.setEncoding('utf8');
    res.on('data', (data) => console.log(data));
    res.on('error', (err) => console.error(err));

}).on('error', (err) => console.error("GET error: " + err.message));

