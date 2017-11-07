'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var arr = [];
  var num1;
  var num2;
  var all = 0;
  for(var i=0;i<collection.length;i++){
    if(collection[i]%2 != 0){
      num1 = collection[i];
      num2 = num1*3+5;
      arr.push(num2);
    }
  }
  for(var j=0;j<arr.length;j++){
    all += arr[j];
  }
  return all;
}

module.exports = hybrid_operation_to_uneven;

