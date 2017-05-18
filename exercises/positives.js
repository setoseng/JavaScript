function sumNumber(num){
  var counter = [];
  for(var x=0;x<num.length;x++){
    if(num[x]>0)
    counter.push(num[x])
  }
  console.log(counter);
}
sumNumber([1, -3, 5, -3, 0]);
