'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var arr = [];
  var result = 0;
  var num;
  var one = 0;
  var two = 0;
  function sortNumber(a,b)
  {
    return a - b;
  }
  arr = collection.split("->");
  arr.sort(sortNumber);
  if(arr.length % 2 === 0) {
    one = arr[(arr.length / 2) -1];
    two = arr[arr.length / 2];
    result =( Number(one) + Number(two)) / 2;
  }
  else {
    result = arr[Number(parseInt(arr.length / 2) -1 ) + Number(arr.length % 2)];
}
  return result ;
}

module.exports = compute_chain_median;
