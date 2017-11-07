'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var index = 0;
  var half = 0;
  var count = 0;
  for(var i=0;i<collection.length;i++){
    if(collection[i]%2 != 0){
      index += collection[i];
      count++;
    }
  }
  half = index/count;
  return half;

}

module.exports = average_uneven;
