'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var even = [];
  for(var i=0;i<collection.length;i++){
    if(collection[i]%2 == 0){
      even.push(collection[i]);
    }
  }
  return even;
}

module.exports = collect_all_even;
