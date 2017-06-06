var promise = require('bluebird');
var pgp = require('pg-promise')({
  promiseLib:promise
});
var co = require('co');
var prompt = require('prompt-promise');
var db = pgp({database: 'seto'});
var arr = [];
var query = `INSERT INTO restaurant \
  VALUES (default, $1)`;

prompt('name: ')
.then(function name(val) {
  arr.push(val);
  return prompt('address: ');
})
.then(function address(val) {
  arr.push(val);
  return prompt('id: ');
})
.then(function id(val) {
  arr.push(val);
  console.log('Done! :)');
  pgp.end();
})

.catch(function rejected(error){
  console.error(error);
});
