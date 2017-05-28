class Person {
    constructor(name){
      this.name = name;
      this.friends = [];
    }
    addFriends(friend){
      this.friends.push(friend);
    }
    createGreeting(num){
      return 'Yo ' + this.friends[num].name + '! from ' + this.name + '.';
    }
    greet(){
      console.log(this.createGreeting(0));
    }
    lazyGreet(){
      setTimeout(console.log(this.createGreeting()));
    }
    createGreetingsForFriends(){
      console.log(this.createGreeting(0)+this.createGreeting(1));
    }
  };

var alfie = new Person('Alfie');
var anushka = new Person('Anushka');
var henrique = new Person('Henrique');
alfie.addFriends(anushka);
alfie.addFriends(henrique);
alfie.createGreetingsForFriends();
