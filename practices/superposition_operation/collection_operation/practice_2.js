'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var arr = [];
  var num1;
  var num2;
  for(var i=0;i<collection.length;i++){
    if(collection[i]%2 != 0){
      num1 = collection[i];
      num2 = num1*3+2;
      arr.push(num2);
    }
  }
  return arr;

}

module.exports = hybrid_operation_to_uneven;

