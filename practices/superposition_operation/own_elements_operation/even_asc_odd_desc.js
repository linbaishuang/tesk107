'use strict';
var even_asc_odd_desc = function(collection){
  var even = []; //偶数
  var odd = []; //奇数
  var result = [];
  collection.sort();
  for(var i=0;i<collection.length;i++){
        if(collection[i]%2 == 0){
            even.push(collection[i]);
        }else{
            odd.push(collection[i]);
        }

  }
  function sortNumber(a,b)
  {
      return a - b;
  }
  even.sort(sortNumber);
  odd.reverse();
  for(var j=0;j<even.length;j++){
      result.push(even[j]);
  }
  for(var k=0;k<odd.length;k++){
      result.push(odd[k]);
  }
  return result;


};
module.exports = even_asc_odd_desc;
