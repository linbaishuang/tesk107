'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var arr = [];
  for(var i=0;i<collection.length;i++){
    if(Array.isArray(collection[i])){
      for(var j=0;j<collection[i].length;j++){
        arr.push(collection[i][j]);
      }
    }
    else{
      arr.push(collection[i]);
    }
  }
  return arr;
}

module.exports = double_to_one;
