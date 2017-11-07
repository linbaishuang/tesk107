'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var arr1 = [];
  var word;
  for(var i=0;i<collection.length;i++){
      word = collection[i];
      for(var j=i+1;j<collection.length;j++){
          if(word == collection[j]){
              i = j+1;
          }
      }
    arr1.push(word);
  }
  return arr1;
}

module.exports = choose_no_repeat_number;
