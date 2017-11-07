'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  var index = 0;
  var half;
  for(var i=0;i<collection.length;i++){
    half = collection[i]*3+2;
    index += half;
  }
  return index;
}

module.exports = hybrid_operation;

