'use strict';
let fs = require('fs');
let dirname = process.argv[2];
let ext = '.' + process.argv[3];
fs.readdir(dirname, function (err, list) {
    if (err)
        return console.error(err);

    let path = require('path');
   // console.log(err, list);
    list.forEach( function (elem) {
        if (path.extname(elem) === ext)
            console.log(elem)
    });
});
