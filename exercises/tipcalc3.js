function splitAmount(cost,service,split){
  if (service=="bad"){
      let total = (cost+(cost * .10))/split;
      console.log(total);
  }
  else if (service=='fair') {
      let total = (cost+(cost * .15))/split;
      console.log(total);
  }
  else if (service=='good') {
      let total = (cost+(cost * .20))/split;
      console.log(total);
  }
}
splitAmount(100,'good',5);
splitAmount(40,'fair',2);
