'use strict';
let url = process.argv[2];
let http = require('http');
http.get(url, function(res) {
    let str = '';
    res.setEncoding('utf8');
    res.on('data', (data) => str += data);
    res.on('error', console.error);
    res.on('end', function() {
        console.log(str.length);
        console.log(str);
    });
}).on('error', (err) => console.error("GET error: " + err.message));

/* Official solution
    var http = require('http')
    var bl = require('bl')
    
http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err) {
                      return console.error(err)
                    
        }
                data = data.toString()
                console.log(data.length)
                console.log(data)
              
    }))
        
})
*/
