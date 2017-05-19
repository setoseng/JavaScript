var fun = function(){
  console.log("Hello, world!");
}
function call3Times(time,fun){
  for(var x=0;x<=time;x++){
    fun();
  }
}
call3Times(5,fun);
