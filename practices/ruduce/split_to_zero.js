'use strict';

function spilt_to_zero(number, interval) {
  // 在这里写入代码
  var arr1 = [];
  var arr2 = [];
  var count = 0;
  var flag = true;
  var num = number;
  var inter = interval;

  while(flag){
      if(num >0){
          arr1.push(num);
      }
      else if(num == 0){
          arr1.push(num);
          break;
      }
      else if(num < 0){
          arr1.push(num);
          count++;
          if(count == 1){
              flag = false;
          }
      }
      num = (num - inter).toFixed(1);
      num = Number(num);
  }
  return arr1;
}

module.exports = spilt_to_zero;
