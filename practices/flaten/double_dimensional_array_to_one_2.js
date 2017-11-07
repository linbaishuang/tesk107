'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var arr = [];
  var flag = true;
  for(var i=0;i<collection.length;i++){
      if(Array.isArray(collection[i])){
          for(var j=0;j<collection[i].length;j++){
              arr.push(collection[i][j]);
          }
      }else{
          arr.push(collection[i]);
      }
  }
  var len = arr.length;
  for(var k=0;k<arr.length;k++){
      for(var m=arr.length-1;m>k;m--){
          if(arr[k] == arr[m]){
            arr.splice(m,1);
            len--;
            m--;
          }
      }
  }
  return arr;
}

module.exports = double_to_one;
