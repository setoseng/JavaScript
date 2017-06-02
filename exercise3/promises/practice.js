function fix_name(name){
  var promise = new Promise(function(resolve,reject){
    try{
    var new_name = name.replace("-",' ');
    resolve(new_name);
  }catch (error){
    reject(error);
  }
  });
  return promise;
}
var p = fix_name(1337);
p
  .then(function(name){
      console.log(name);
  })
  .catch(function(error){
    console.log(error);
  })
