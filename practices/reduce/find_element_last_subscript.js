'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  var i = collection.length-1;
  var num = element;
  for(;i>=0;i--){
    if(num == collection[i]){
      break;
    }
  }
  return i;
}

module.exports = calculate_elements_sum;
