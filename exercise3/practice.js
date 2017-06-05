var arr = [];
var newArr=[]
function findLongestWord(str) {
  arr =str.split(" ");
  for (var x=0;x<=arr.length-1;x++){
    newArr.push(arr[x].length);

  }
  console.log(newArr.reduce(function(x,y){
    return x+y;
  }))
}

findLongestWord("The quick brown fox jumped over the lazy dog");
