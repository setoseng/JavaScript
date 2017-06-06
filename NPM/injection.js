var promise = require('bluebird');
var pgp = require('pg-promise')({
  promiseLib:promise
});
var db = pgp({database: 'seto'});
var name = "Big Belly Burger";
var query = `INSERT INTO restaurant \
  VALUES (default, $1)`;

db.result(query,name)
  .then(function (result) {
    console.log(result);
    pgp.end()
  });
