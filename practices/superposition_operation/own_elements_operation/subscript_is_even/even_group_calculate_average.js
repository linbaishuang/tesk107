'use strict';
var even_group_calculate_average = function(collection){
    var arr1 = [];
    var arr2 = [];
    var arr3 = [];
    var arr = [];
    var len = 0;
    var len1 = 0;
    var len2 = 0;
    var len3 = 0;
    var num1 = 0;
    var num2 = 0;
    var num3 = 0;
    for(var i=0;i<collection.length;i++){
      if(i%2 != 0){
          if(collection[i]%2 == 0){
            len = collection[i].toString().length;
            if(len == 1){
              arr1.push(collection[i]);
            }
            else if(len == 2){
              arr2.push(collection[i]);
            }
            else{
              arr3.push(collection[i]);
            }
          }
      }
    }
    len1 = arr1.length;
    len2 = arr2.length;
    len3 = arr3.length;
    if(len1 == 0 && len2 == 0 && len3 == 0){
        arr.push(arr.length);
        return arr;
    }
    if(len1 != 0 && len2 != 0){
      for(var i=0;i<arr1.length;i++){
        num1 += arr1[i];
      }
      arr.push(num1/len1);

      for(var i=0;i<arr2.length;i++){
        num2 += arr2[i];
      }
      arr.push(num2/len2);
    }
    for(var i=0;i<arr3.length;i++){
      num3 += arr3[i];
    }
    arr.push(num3/len3);
    return arr;
};
module.exports = even_group_calculate_average;
