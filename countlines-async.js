'use strict';
let fname = process.argv[2];
require('fs').readFile(fname, 'utf8', function (err, fileContent) {
  if (err) {
    console.log(err);
  } else {
    console.log(fileContent.split('\n').length - 1);
  }
});
