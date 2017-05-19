var a = [
  [1, 3, 4],
  [2, 4, 6, 8],
  [3, 6]
];
var b = a.reduce(function (x,y){
  return a+b;
});
var c = a.sort(function (x, y) {
  if (x > y) { return 1; }
  else if (x < y) { return -1; }
  return 0;
});
console.log(c);
