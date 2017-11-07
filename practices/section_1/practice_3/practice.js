function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var eq_num = [];
  var k = 0;
  for(var i=0;i<collection_a.length;i++){
    for(var j=0;j<4;j++){
      if(collection_a[i] == object_b.value[j]){
        eq_num[k] = collection_a[i];
        k++;
      }
    }
  }
  return eq_num;
}

module.exports = collect_same_elements;
