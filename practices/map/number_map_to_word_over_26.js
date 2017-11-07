'use strict';
var number_map_to_word_over_26 = function(collection){
  var word;
  var fir;
  var fir_word;
  var arr1 = [];
  var number_a= 0;
  for(var i=0;i<collection.length;i++){
    number_a = collection[i];
    if(number_a >= 27 && number_a <= 52){
      fir = String.fromCharCode( 96 + number_a - 26);
      fir_word = 'a' + fir;
      arr1.push(fir_word);
    }
    else if(number_a <=26){
      word = String.fromCharCode(96 + number_a);
      arr1.push(word);
    }
  }
  return arr1;
};

module.exports = number_map_to_word_over_26;
