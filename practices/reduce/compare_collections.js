'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  var flag = true;
  for(var i=0;i<collection_a.length;i++){
      for(var j=i;;){
          if(collection_a[i] != collection_b[j]){
              flag = false;
          }else{
              break;
          }
      }
  }
  return flag;
}

module.exports = compare_collections;


