function vowels(text){
  var text = text.toLowerCase();
  text = text.replace(/aa/g,'aaaaa');
  text = text.replace(/ee/g,'eeeee');
  text = text.replace(/ii/g,'iiiii');
  text = text.replace(/oo/g,'ooooo');
  text = text.replace(/uu/g,'uuuuu');
  console.log(text);
}
vowels('Good');
