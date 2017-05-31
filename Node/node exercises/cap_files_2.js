var fs = require('fs');
var request = require('request');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter a file name:",function(name){
  fs.readFile(name,function(error,buffer){
    if(error){
      console.error(error.message);
      return;
    }
    var contents = buffer.toString();
    var backwards = contents.split('').reverse().join('');

    rl.question("Enter a file name to save to:",function(saveName){
        fs.writeFile(saveName,backwards,function(error){
          if(error){
            console.error(error.message);
            return;
          }
          console.log("Saved File: "+saveName+".");
          rl.close();
        });
    });
  });

});
