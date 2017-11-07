'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var array1 = [];
  var array2 = [];
  var array3 = [];

  if(number_a == number_b && number_a%2 ==0){
      array3.push(number_a);
      return array3;
  }else if(number_a == number_b && number_a%2 != 0){
      return array3;
  }
  else if(number_a != number_b && number_a < number_b){
      for(;;){
          if(number_a <= number_b){
              if(number_a%2 == 0){
                array1.push(number_a);
              }
          }else {
              break;
          }
          number_a++;
      }
      return array1;
  }
  else if(number_a != number_b && number_a > number_b){
      for(;;){
          if(number_a >= number_b){
              if(number_a%2 == 0){
                array2.push(number_a);
              }
          }else{
              break;
          }
          number_a--;
      }
      return array2;
  }

}




module.exports = get_integer_interval_2;
