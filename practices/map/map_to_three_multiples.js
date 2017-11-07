'use strict';
var map_to_three_multiples = function(collections){
  var  num = 0;
  var arr = [];
  for(var i=0;i<collections.length;i++){
      num = collections[i]*3
      arr.push(num);
  }
  return arr;
};

module.exports = map_to_three_multiples;
