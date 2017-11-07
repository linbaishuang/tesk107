'use strict';
var map_to_four_multiples_add_one = function(collection){
  var arr = [];
  var num = 0;
  for(var i=0;i<collection.length;i++){
    num = collection[i]*4+1;
    arr.push(num);
  }
  return arr;
};

module.exports = map_to_four_multiples_add_one;
