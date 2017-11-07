function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var eq_num = [];
  var counts = 2;
  for(var i=0;i<collection_a.length;i++){
    for(var j=0;j<4;j++){
      if(collection_a[i].key == object_b.value[j]){
        counts = counts -1;
        break;
      }else {
        counts = 2;
      }
    }
    eq_num.push({key:collection_a[i].key,count:counts});
  }
  return eq_num;
}

module.exports = create_updated_collection;
