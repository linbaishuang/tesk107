function count_same_elements(collection) {
  //在这里写入代码
  var eq_num = [];
  var m = 0;
  var i = 0;
  for(;i<collection.length;){
    for(var j=collection.length-1;j>=0;j--){
      if(collection[i] == collection[j]){
        eq_num.push({key:collection[j],count:j+1-m});
        break;
      }
    }
    m = j+1;
    i = m;
  }
  return eq_num;
}

module.exports = count_same_elements;
