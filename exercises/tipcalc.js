function tipCalc(cost,service){
  if (service=="bad"){
      let total = cost * .10;
      console.log(total);
  }
  else if (service=='fair') {
      let total = cost * .15;
      console.log(total);
  }
  else if (service=='good') {
      let total = cost * .20;
      console.log(total);
  }
}
tipCalc(100,'good');
tipCalc(40,'fair');
