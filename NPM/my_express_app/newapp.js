var express = require('express');
var app = express();
var body_parser = require('body-parser');

var promise = require('bluebird');
var pgp = require('pg-promise')({
  promiseLib:promise
});
var db = pgp({database: 'seto'});

app.set('view engine', 'hbs');
app.use('/static',express.static('public'));

app.use(body_parser.urlencoded({extended: false}));

app.get('/', function(request,response){
  response.send('Hello World');
});



app.get('/about', function(request,response){
  response.send('About Me');
});

app.get('/projects', function(request,response){
  response.send('Projects');
});
//URL Parameters
app.get('/post/:slug',function(request,response){
  var slug = request.params.slug;
  response.send("Post about: "+slug);
});
//Get Parameters
app.get('/hello',function(request, response){
  var name = request.query.name || "World";
  var context = {
    title:'Hello',
    name: name,
    content:'<strong>HELLO</strong>',
    friends:[
      {name:" john",age:21},
      {name:" jane"},
    ]
  };
  response.render('hello.hbs', context);
});

app.get('/form',function(reuqest,response){
  response.render('form.hbs');
});
app.post('/submit', function (request, response) {
  console.log(request.body);
  response.redirect('/thank-you')
});

app.get('/thank-you',function(request,response){
  response.render('thank-you.hbs');
})
///search page


app.get('/search',function(request, response, next){
  let term = request.query.searchTerm;
  let query = "SELECT * FROM restaurant WHERE \ restaurant.name ILIKE '%$1#%' ";
  db.any(query,term)
    .then(function(resultsArray){
      response.render('search.hbs',{results: resultsArray});
    })
    .catch(next);
});






app.listen(8000, function(){
  console.log("Listening on port 8000");
});
