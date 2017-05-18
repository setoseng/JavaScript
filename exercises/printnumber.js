function printNumber(start,end){
  for (var count=start; count<=end;count++){
    console.log(count);
  }
}
function printNumberWhile(start,end){
  var count = start-1;
  while (count<end){
    count ++;
    console.log(count);
  }
}

printNumber(1,10);
printNumberWhile(1,15);
