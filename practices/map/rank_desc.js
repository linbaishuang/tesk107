'use strict';
var rank_desc = function(collection){
  var arr = [];
  var temp;
  for(var i=0;i<collection.length;i++){
    for(var j=collection.length-1;j>i;j--){
      if(collection[j] < collection[i]){
        temp = collection[i];
        collection[i] = collection[j];
        collection[j] = temp;
      }
    }
    arr.push(collection[j]);

  }
  return arr;
};

module.exports = rank_desc;
