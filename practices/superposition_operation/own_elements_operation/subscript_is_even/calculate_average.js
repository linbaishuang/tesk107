'use strict';
var calculate_average = function(collection){
    var num = 0;
    var count = 0;
    var result = 0;
    for(var i=0;i<collection.length;i++){
      if(collection[i]%2 == 0){
          num += collection[i];
          count++;
      }else{
          continue;
      }
    }
    result = num/count;
    return result;

};
module.exports = calculate_average;
