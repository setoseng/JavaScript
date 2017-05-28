var mom = {
  firstName: 'Alice',
  lastName: 'Wong',
  eyeColor: 'brown',
  hairColor: 'black',
  showInfo:function(){
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.eyeColor);
    console.log(this.hairColor);
  }
};

var daughter = {
  firstName: 'Ilene',
  hairColor: 'brown'
};

daughter.__proto__ = mom;
daughter.showInfo();
