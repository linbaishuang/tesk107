'use strict';

function compute_average(collection) {
  //在这里写入代码
  var num = 0;
  var count = collection.length;
  var  result = 0;
  for(var i=0;i<collection.length;i++){
    num += collection[i];
  }
  result = num/count;
  return result;
}

module.exports = compute_average;

