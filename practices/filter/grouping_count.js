'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var arr = {};
  var count = 0;
  var temp = 0;
  collection.sort();
  for(var i=0;i<collection.length;){
      for(var j=collection.length-1;j>=0;j--){
          if(collection[i] == collection[j]){
              arr[collection[i]] = j-i+1;
              break;
          }
      }
      i = j+1;
  }
  return arr;
}

module.exports = grouping_count;
