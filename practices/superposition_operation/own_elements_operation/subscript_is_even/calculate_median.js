'use strict';
var calculate_median = function(collection){
    var arr1 = [];
    var index = 0;
    var behind = 0;
    var next = 0;
    var result;
    for(var i=0;i<collection.length;i++){
        if(collection[i]%2 == 0){
            arr1.push(collection[i]);
        }
    }
    if(arr1.length%2 != 0){
        index = Math.ceil(arr1.length/2);
        return arr1[index-1];
    }
    else{
        index = arr1.length/2;
        behind = arr1[index-1];
        next = arr1[index];
        result = (behind + next)/2;
        return result;
    }
};
module.exports = calculate_median;
