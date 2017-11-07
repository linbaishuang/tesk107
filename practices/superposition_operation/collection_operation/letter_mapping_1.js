'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var word;
  var arr = [];
  for(var i=0;i<collection.length;i++){
    if(collection[i]%2 == 0){
      word = String.fromCharCode(96 + collection[i]);
      arr.push(word);
    }
  }
  return arr;

}

module.exports = even_to_letter;
