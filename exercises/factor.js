function factor(number){
  var list = [];
  for (var x=0;x<=number;x++){
    if(number%x==0){
      list.push(x);
    }
  }
  console.log(list);
}
factor(120);
