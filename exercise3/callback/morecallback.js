function readFileUpCased(filename,callback){


fs.readFile('file1.txt',function(err,buffer){
  if (err){
    callback(err);
    return;
  }
  var upcased = buffer.toString().toUpperCase();
  callback(null,upcased)
});
}
