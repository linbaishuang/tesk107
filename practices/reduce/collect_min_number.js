'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  var  num = collection[0];
  var temp = 0;
  for(var i=0;i<collection.length;i++){
    if(num > collection[i]){
      temp = num;
      num = collection[i];
      collection[i] = temp;
    }
  }
  return num;
}

module.exports = collect_min_number;

