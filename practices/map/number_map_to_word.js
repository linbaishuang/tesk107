'use strict';
var number_map_to_word = function(collection){
  var arr =  [];
  var word;
  for(var i=0;i<collection.length;i++){
      word = String.fromCharCode(96 + collection[i]);
      arr.push(word);
  }
  return arr;
};

module.exports = number_map_to_word;
