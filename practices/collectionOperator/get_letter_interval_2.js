'use strict';

function get_letter_interval_2(number_a, number_b) {
    //在这里写入代码
  var word;
  var fir;
  var fir_word;
  var sec;
  var sec_word;
  var thr;
  var thr_word;
  var arr1 = [];
  var arr2 = [];
  var arr3 = [];

  if(number_a < number_b){
      for(;;){
        if(number_a >= 27 && number_a <= 52 && number_a <= number_b){
          fir = String.fromCharCode( 96 + number_a - 26);
          fir_word = 'a' + fir;
          arr1.push(fir_word);
        }
        else if(number_a >= 53 && number_a <= number_b){
          sec = String.fromCharCode(96 + number_a - 52);
          sec_word = 'b' + sec;
          arr1.push(sec_word);
        }
        else if(number_a <=26 && number_a <= number_b){
          word = String.fromCharCode(96 + number_a);
          arr1.push(word);
        }
        else{
          break;
        }
        number_a++;
      }
      return arr1;
  }

  if(number_a > number_b){
    for(;;){
        if(number_a >= 27 && number_a <= 52 && number_a >= number_b){
            fir = String.fromCharCode( 96 + number_a - 26);
            fir_word = 'a' + fir;
            arr2.push(fir_word);
        }
        else if(number_a >= 53 && number_a >= number_b){
            sec = String.fromCharCode(96 + number_a - 52);
            sec_word = 'b' + sec;
            arr2.push(sec_word);
        }
        else if(number_a <=26 && number_a >= number_b){
            word = String.fromCharCode(96 + number_a);
            arr2.push(word);
        }
        else{
            break;
        }
        number_a--;
    }
    return arr2;
  }

  if(number_a == number_b){
    if(number_a >= 27 && number_a <= 52){
      thr = String.fromCharCode( 96 + number_a - 26);
      thr_word = 'a' + thr;
      arr3.push(thr_word);
    }
    return arr3
  }


}

module.exports = get_letter_interval_2;

