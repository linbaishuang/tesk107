'use strict';

function amount_even(collection) {

  //在这里写入代码
  var index = 0;
  for(var i=0;i<collection.length;i++){
    if(collection[i]%2 == 0){
      index += collection[i];
    }
  }
  return index;
}

module.exports = amount_even;
