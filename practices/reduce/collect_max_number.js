'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  var  a= collection[0];
  var temp;
  for(var i=0;i<collection.length;i++){
    if(a < collection[i]){
      a = collection[i];
    }
  }
  return a;
}

module.exports = collect_max_number;
