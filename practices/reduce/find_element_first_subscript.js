'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  var num = element;
  var i = 0;
  for(;i<collection.length;i++){
    if(num == collection[i]){
      break;
    }
  }
  return i;
}

module.exports = calculate_elements_sum;

