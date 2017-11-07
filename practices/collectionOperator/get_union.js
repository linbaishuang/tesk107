'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var arr1 = [];
  var flag = true;
  var temp;
  for(var k=0;k<collection_a.length;k++){
      arr1.push(collection_a[k]);
  }
  for(var i=0;i<collection_b.length;i++){
      temp = collection_b[i];
      for(var j=0;j<collection_a.length;j++){
          if(temp == collection_a[j]){
              flag = false;
              break;
          }
      }
      if(flag){
          arr1.push(collection_b[i]);
      }
      flag = true;
  }

  return arr1;

}

module.exports = get_union;

