/* cb rewrite
function add(x, y) {
  var result = x + y;
  return result;
}*/
function cb(result){
  console.log("The result was "+result);
}

function add(x,y,cb){
  var result = x+y;
  cb(result);
}
add(2,3,cb);

/*function subtract(x, y) {
  return x - y;
}*/
function substract(x,y,callback){
  var results = x-y;
  callback(results)
}
substract(9,2,function callback(result){
  console.log("The difference is "+result);
})

/*function greeting(person) {
  return 'Hola, ' + person + '!';
}*/

function greeting (person,callback){
  var cb = "Hola, "+ person+"!";
  callback(cb);
}
greeting("Jack",function callback(cb){
  console.log(cb);
})
