//imports
var express = require('express');
var app = express();
var body_parser = require('body-parser');
var promise = require('bluebird');
var pgp = require('pg-promise')({
  promiseLib:promise
});
var db  = pgp({database:'to_do'});

//set up
app.set('view-engine', 'hbs');
app.use('/static',express.static('public'));
app.use(body_parser.urlencoded({extended: false}));

//app
app.get('/', function(request,response){
  response.send('Hello World');
});

app.get('/todo',function(request, response, next){
  let query = "SELECT * FROM task"
  db.any(query)
    .then(function(results){
      response.render('results.hbs',{
        results:results
      });
    })
    .catch(next);
});

app.post('/submit', function (request, response, next) {
  var desc = request.body.description;
  db.none(`INSERT INTO task values(default,'${desc}',FALSE)`)
    .then(function(todo){
      response.redirect('/todo');
    })
    .catch(next);
});

app.get('/todo/done/:id',function(request, response, next){
  var id = request.params.id;
  db.result(`DELETE FROM task WHERE id=${id}`)
    .then(function(){
      response.redirect('/todo');
    })
    .catch(next);
});




//listening
app.listen(8000, function(){
  console.log("Listening on port 8000");
});
