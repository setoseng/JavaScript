function printSquare(size){
  for(var x=0; x<size;x++){
    for(var y=0;y<size;y++){
      process.stdout.write("*");
    }
    console.log('');
  }
}
printSquare(5);
