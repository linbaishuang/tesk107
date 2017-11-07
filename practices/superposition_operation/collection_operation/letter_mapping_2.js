'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var all = 0;
  var len = collection.length;
  var half = 0;
  var index;
  for(var i=0;i<collection.length;i++){
    all += collection[i];
  }
  half = parseInt(all/len);
  index = String.fromCharCode(96 + half +1);
  return index;

}

module.exports = average_to_letter;

