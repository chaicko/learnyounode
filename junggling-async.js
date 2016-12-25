'use strict';
const ev = require('events');
const http = require('http');

let urls = [ process.argv[2], process.argv[3], process.argv[4] ];
let responses = ['', '', ''];
let cnt = 0;

let evEmitter = new ev.EventEmitter();
evEmitter.on('res-completed', function(idx, data) {
    responses[idx] = data;
    if (++cnt === urls.length) {
//        console.log("cnt = ", cnt);
        for (let idx = 0; idx < responses.length; idx++) {
//            console.log("response of URL " + urls[idx]);
            console.log(responses[idx]);
        }
    }
});

for (let idx = 0; idx < urls.length; idx++) {
    http.get(urls[idx], function(res) {
        let str = '';
        res.setEncoding('utf8');
        res.on('data', (data) => str += data);
        res.on('error', console.error);
        res.on('end', function() {
//            console.log("finished response for idx = ", idx, " url = " + urls[idx]);
            evEmitter.emit('res-completed', idx, str);
        });
    });
}

/*
    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0
    
    function printResults () {
      for (var i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }
    
          results[index] = data.toString()
          count++
    
          if (count === 3) {
            printResults()
          }
        }))
      })
    }
    
    for (var i = 0; i < 3; i++) {
      httpGet(i)
    }
*/
