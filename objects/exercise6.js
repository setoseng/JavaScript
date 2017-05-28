class counter{
  constructor(num){
  this.num=num;
  }

  increment(){
    this.num++;
    console.log(this.num);
  }
  decrement(){
    this.num--;
    console.log(this.num);
  }
}
var count = new counter(4);
count.increment();
count.decrement();
