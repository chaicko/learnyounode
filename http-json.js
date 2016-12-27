'use strict';
const http = require('http');
const portNumber = process.argv[2];
const url = require('url');

let server = http.createServer(function (req, res) {
    res.statusCode = 400;
    if (req.method === 'GET') {
        let edp = url.parse(req.url, true);
        if (edp.pathname === '/api/parsetime' || edp.pathname === '/api/unixtime') {
            let date = new Date(edp.query.iso);
            if (!isNaN(date.getTime())) { // True if date is valid, i.e., parsed correctly
                let resJSON = (edp.pathname === '/api/parsetime') ? {
                    'hour': date.getHours(),
                    'minute': date.getMinutes(),
                    'second': date.getSeconds()
                } : {
                    'unixtime': date.getTime()
                };
                res.writeHead(200, {
                    'Content-Type': 'application/json'
                });
                res.write(JSON.stringify(resJSON));
            }
        }
    }
    res.end();
});
server.listen(portNumber);

/*  Official Solution (with thorugh2-map module from NPM)
    var http = require('http')
    var url = require('url')

    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }

    function unixtime (time) {
      return { unixtime: time.getTime() }
    }

    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result

      if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }

      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))
*/