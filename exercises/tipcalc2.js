function totalAmount(cost,service){
  if (service=="bad"){
      let total = cost+(cost * .10);
      console.log(total);
  }
  else if (service=='fair') {
      let total = cost+(cost * .15);
      console.log(total);
  }
  else if (service=='good') {
      let total = cost+(cost * .20);
      console.log(total);
  }
}
totalAmount(100,'good');
totalAmount(40,'fair');
