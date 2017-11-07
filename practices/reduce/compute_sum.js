'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  var num = 0;
  for(var i=0;i<collection.length;i++){
    num += collection[i];
  }
  return num;
}

module.exports = calculate_elements_sum;

