'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  var temp;
  function sortNumber(a,b)
  {
      return a - b;
  }
  collection.sort(sortNumber);
  for(var i=0;i<collection.length-2;){
      temp = collection[i];
      for(var j=i;j<i+2;j++){
          collection[j] = collection[j+1];
      }
      collection[i+2] = temp;
      i = i+3;
  }
  return collection;
}
module.exports = rank_by_two_large_one_small;
