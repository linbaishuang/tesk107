'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  var arr1 = [];
  for(var i=0;i<collection.length;i++){
      if(collection[i]%3 == 0){
          arr1.push(collection[i]);
      }
  }
  return arr1;
}

module.exports = choose_multiples_of_three;
