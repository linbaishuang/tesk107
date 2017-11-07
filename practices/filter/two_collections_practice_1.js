'use strict';

function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var arr = [];
  var temp;
  for(var i=0;i<collection_a.length;i++){
      temp = collection_a[i];
      for(var j=0;j<collection_a.length;j++){
          if(temp == collection_b[j]){
              arr.push(collection_a[i])
          }
      }
  }
  return arr;
}

module.exports = choose_common_elements;
