'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var len = collection.length;
  var index = 0;
  var behind = 0;
  var next =  0;
  var result = 0;
  var word;
  var words;
  if(len%2 ==0){
      index = len/2;
      behind = collection[index-1];
      next = collection[index];
      result = Math.ceil((behind + next)/2);
      if(result <= 26){
          words = String.fromCharCode(96 + result);
      }else{
        word = String.fromCharCode(96 + result - 26);
        words = 'a' + word;
      }
  }else{
      index = Math.ceil(len/2);
      result = collection[index];
      if(result <= 26){
        words = String.fromCharCode(96 + result);
      }else{
        word = String.fromCharCode(96 + result - 26);
        words = 'a' + word;
      }
  }
  return words;
}

module.exports = median_to_letter;
