'use strict';

function collect_last_element(collection) {
  //在这里写入代码
  var  ele =  0;
  for(var i=0;i<collection.length;i++){
    if(i == collection.length-1){
      ele = collection[i];
    }
  }
  return ele;
}

module.exports = collect_last_element;
