'use strict';
let fname = process.argv[2];
let fileContent = require('fs').readFileSync(fname).toString();
//console.log(fileContent);
//console.log(fileContent.split('\n'));
console.log(fileContent.split('\n').length - 1);
