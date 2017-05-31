//nested callback 1
/*function squared(num,callback){
  callback(num*num);
}
squared(5,function(result){
  console.log('Result is '+result);
});

var x = 4;
var y = 3;
var x2 = square(x);
var y2 = square(y);
var sum = x2 + y2;*/
/*
function square(num,callback){
  callback(num*num);
}
function sum(x,y,callback){
  callback(x+y);
}
square(2,function(total){
  sum(total,total,function(result){
    console.log("The answer is: "+result);
  })
})
*/


function square(x,y,callback) {
  var x2 = x*x;
  var y2 = y*y;
  callback(x2,y2);
}

function sum(x,y,callback){
  callback(x+y);
}

function squareRoot(num,callback) {
  callback(Math.sqrt(num));
}



square(4,3,function(x,y){
  sum(x,y,function(square){
    squareRoot(square,function(result){
      console.log("The answer is:"+result);
    })
  })
})
