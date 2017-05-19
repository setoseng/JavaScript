var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];
var b = people.sort(function (x, y) {
  if (x.length > y.length) { return 1; }
  else if (x.length < y.length) { return -1; }
  return 0;
});
console.log(b);
