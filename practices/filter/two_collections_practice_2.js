'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var arr = [];
  var temp;
  var flag = true;
  for(var i=0;i<collection_a.length;i++){
      temp = collection_a[i];
      for(var j=0;j<collection_b.length;j++){
          if(temp == collection_b[j]){
              flag = false;
              break;
          }else{
              continue;
          }
      }
      if(flag){
          arr.push(collection_a[i]);
      }
      flag = true;
  }
  return arr;
}

module.exports = choose_no_common_elements;
