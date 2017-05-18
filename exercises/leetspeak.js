function leetSpeak(str){
  str =str.toUpperCase();
  for (var x=0;x<=str.length;x++){
    if(str[x]=='A'){
      str =str.replace(str[x],"4")
    }
    if(str[x]=='E'){
      str =str.replace(str[x],"3")
    }
    if(str[x]=='G'){
      str =str.replace(str[x],"6")
    }
    if(str[x]=='I'){
      str =str.replace(str[x],"1")
    }
    if(str[x]=='O'){
      str =str.replace(str[x],"0")
    }
    if(str[x]=='S'){
      str =str.replace(str[x],"5")
    }
    if(str[x]=='T'){
      str =str.replace(str[x],"7")
    }
  }
  console.log(str);
}
leetSpeak('Leet')
