'use strict';

function choose_even(collection) {
  //在这里写入代码
  var arr1 = [];
  for(var i=0;i<collection.length;i++){
      if(collection[i]%2 == 0){
          arr1.push(collection[i]);
      }
  }
  return arr1;
}

module.exports = choose_even;
