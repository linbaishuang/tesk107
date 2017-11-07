function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var eq_num = [];
  var i = 0;
  var m = 0;
  var p = 0;
  for(;i<collection_a.length;){
    for(var j=collection_a.length-1;j>=0;j--){
      if(collection_a[i] == collection_a[j]){
        eq_num.push({key:collection_a[j],count:j+1-m});
        break;
      }
    }
    m = j+1;
    i = j+1;
  }





  for(var n=0;n<eq_num.length;n++){
    for(var a=0;a<4;a++){
      if(eq_num[n].key == object_b.value[a]){
        p = parseInt(eq_num[n].count/3);
        eq_num[n].count = eq_num[n].count - p;
        break;
      }
    }
  }
  return eq_num;
}

module.exports = create_updated_collection;
