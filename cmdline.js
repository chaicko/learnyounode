'use strict';
//console.log(process.argv);
let args = process.argv.slice(2);
//console.log(args);
let sum = args.reduce((a, b) => Number(a) + Number(b), 0);
console.log(sum);

