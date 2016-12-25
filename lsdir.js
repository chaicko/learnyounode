'use strict';
let dirname = process.argv[2];
let ext = process.argv[3];
let filt = require('./filt.js');

filt(dirname, ext, function (err, list) {
    if (err) return console.error(err);
    list.forEach( (elem) => console.log(elem));
});
