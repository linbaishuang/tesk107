'use strict';
var single_element = function(collection){
  var arr = [];

  for(var i=0;i<collection.length;i++){
      if(i%2 != 0){
        arr.push(collection[i]);
      }
  }
    if(arr.length != 0){
      for(var i=0;i<arr.length;i++){
        for(var j=arr.length-1;j>=0;j--){
          if(i != j &&i!= j-1 && arr[i] == arr[j] && arr[i] == arr[j-1]){
            arr.splice(i,1);
            arr.splice(j-2,2);
          }else if(i != j && arr[i] == arr[j]){
            arr.splice(i,1);
            arr.splice(j-1,1);
          }
        }
      }
    }
  return arr;
};
module.exports = single_element;
