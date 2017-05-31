var fs  = require('fs');
var request = require('request');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
fs.readFile('file2.txt',function (error,buffer){
  if(error){
    console.error(error.message);
    return;
  }
  console.log('File Data: ',buffer.toString())
});
