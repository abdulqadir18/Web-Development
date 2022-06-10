//Checking
console.log("Hello Node");

//Native node packages
const fs= require('fs');
fs.copyFileSync("f1.txt","f2.txt");

//npm - supervillians
const supervillains = require('supervillains');
var sv = supervillains.random();
console.log(sv);
