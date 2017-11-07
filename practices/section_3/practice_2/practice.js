function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var eq_num = [];
  var c = 0;
  for(var i=0;i<collection_a.length;i++){
    for(var j=0;j<4;j++){
      if(collection_a[i].key == object_b.value[j]){
        c = parseInt(collection_a[i].count/3);
        break;
      }else{
        c = 0;
      }
    }
    eq_num.push({key:collection_a[i].key,count:collection_a[i].count-c});
  }
  return eq_num;
}

module.exports = create_updated_collection;
