function palindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[" "`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,"");
  var array = str.split("");
  array.reverse();
  var newStr = array.join("");
  if (str==newStr){
    return true;
  }
  else{
    return false;
  }
}

palindrome("A man, a plan, a canal. Panama");
