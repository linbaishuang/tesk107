'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var arr1 = [];
  var arr2 = [];
  var arr3 = [];
  if(number_a < number_b){
      for(;;){
          if(number_a <= number_b){
            arr1.push(number_a);
          }else{
            break;
          }
          number_a++;
      }
      return arr1;
  }
  else if(number_a > number_b) {
      for(;;){
          if(number_a >= number_b){
              arr2.push(number_a);
          }else{
              break;
          }
          number_a--;
      }
      return arr2;
  }
  else if(number_a == number_b){
      arr3.push(number_a);
      return arr3;
  }


}


module.exports = get_integer_interval;

