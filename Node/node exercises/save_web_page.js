var fs = require('fs');
var request = require('request');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output:process.stdout
});
rl.question("Enter a URL to save: ",function(url){
  rl.question("Enter a place to save URL to: ",function(name){

    fs.writeFile(name, content, function(error){
      if(error){
        console.log(error.message);
      }
      console.log("URL Saved Sucessfully at : "+name);
      rl.close();
    })
  })
})
