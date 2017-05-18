function printBanner(banner){
  var str = banner.length+4;
  for (var x=0;x<str;x++){
    process.stdout.write("*");
  }
  console.log('');
  console.log('* '+banner+' *');
  for (var x=0;x<str;x++){
    process.stdout.write("*");
  }
  console.log('');
}
printBanner('Welcome to DigialCrafts');
