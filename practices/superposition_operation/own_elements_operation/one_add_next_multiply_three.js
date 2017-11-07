'use strict';
function one_add_next_multiply_three(collection){
  var arr = [];
  var index = 0;
  for(var i=0;i<collection.length-1;i++){
    index = (collection[i]+collection[i+1])*3;
    arr.push(index);
  }
  return arr;
}
module.exports = one_add_next_multiply_three;
