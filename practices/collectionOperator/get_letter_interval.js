'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var arr1 = [];
  var arr2 = [];
  var arr3 = [];
  var fir;
  var sec;
  var thr;
  if(number_a < number_b){
      for(;;){
          if(number_a <= number_b){
              fir = String.fromCharCode(96 + number_a);
              arr1.push(fir);
          }else {
            break;
          }
          number_a++;
      }
      return arr1;
  }

  if(number_a > number_b){
      for(;;){
          if(number_a >= number_b){
              sec = String.fromCharCode(96 + number_a);
              arr2.push(sec);
          }else {
              break;
          }
          number_a--;
      }
      return arr2;
  }

  if(number_a == number_b){
      thr = String.fromCharCode(96 + number_a);
      arr3.push(thr);
      return arr3;
  }
}

module.exports = get_letter_interval;
