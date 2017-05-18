function sumNumber(num){
  var counter = 0;
  for(var x=0;x<num.length;x++){
    counter += num[x];
  }
  console.log(counter);
}
sumNumber([1,4,8])
