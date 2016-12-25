'use strict';
let fs = require('fs');

function filt (dirname, extension, cb) {
    fs.readdir(dirname, function (err, list) {
        if (err) return cb(err);

        let path = require('path');
        extension = '.' + extension;
        let filtered = list.filter((fname) => path.extname(fname) === extension);
        return cb(null, filtered);
    });
}

module.exports = filt;
