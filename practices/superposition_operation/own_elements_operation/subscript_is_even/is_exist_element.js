'use strict';
var is_exist_element = function(collection,element){
  var index;
  index = element;
  for(var i=0;i<collection.length;i++){
    if(collection[i] == index){
      if(i%2 == 0){
        return true;
      }
      else {
        return false;
      }

    }
  }
};
module.exports = is_exist_element;
