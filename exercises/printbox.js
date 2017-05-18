function printBox(height,width){
  for(var x=1; x<=width;x++){
    for(var y=1;y<=height;y++){
      if(x>1&& x<width && y>1&& y<height){
        process.stdout.write(" ");
      }
      else{
        process.stdout.write("*");
      }
    }
    console.log('');
  }
}
printBox(6,4);
