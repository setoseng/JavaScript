var express = require('express');
var app = express();

app.set('view engine', 'hbs');
app.use('/static',express.static('public'));

app.get('/',function(request,response){
  response.send("Hello World!");
});
app.get('/cats',function(request,response){
  response.send("Meow");
});
app.get('/dogs',function(request,response){
  response.send("Woof");
});
app.get('/cats_and_dogs',function(request,response){
  response.send("Live together");
});
//URL Parameters
// taking what ever slug is and print Hello slug
app.get('/hello/:slug',function(request,response){
  var slug = request.params.slug;
  response.send("Hello "+slug);
});
/* Taking URL query and printing birth year
app.get('/year',function(request,response){
  var age = request.query.age;
  var birth = (2017-age);
  response.send("You were born in "+ birth);
});*/
//Using Template
/*
app.get('/greet/:name',function(request,response){
  var name =request.params.name;
  var age = request.query.age;
  var birth = (2017-age);
  response.render('hello.hbs', {name: name, age: age, birth: birth});
  //you can only pass in one thing after the template
}); */
app.get('/fav_animals',function(request,response){
  var animals = [
  { name: 'cats', favorite: false },
  { name: 'dogs', favorite: true },
  { name: 'tree frogs', favorite: false },
  { name: 'earth worms', favorite: false },
  { name: 'guinea pigs', favorite: true },
  ];
  response.render('animals.hbs', {animals: animals});
});



app.listen(8000,function(){
  console.log("Listening on Port 8000");
});
