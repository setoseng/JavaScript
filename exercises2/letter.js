var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
function letterHistogram(histo){
  var counter = 0;
  for (var x=0;x<=histo.length;x++){
    var value = histo[x];
    if (alphabet[x]==histo[x]){
      counter +=1;
    }
    console.log(`${value}:${counter}`);
  }
}
letterHistogram('bananas');
