'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  var arr = [];
  var flag = false;
  for(var i=0;i<collection_a.length;i++){
      for(var j=0;j<collection_b.length;j++){
          if(collection_a[i]%collection_b[j] == 0){
              flag = true;
              break;
          }else {
              continue;
          }
      }
      if(flag){
          arr.push(collection_a[i]);
      }
      flag = false;
  }
  return arr;
}

module.exports = choose_divisible_integer;