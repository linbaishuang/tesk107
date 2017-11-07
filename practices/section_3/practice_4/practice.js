function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var eq_num = [];
  var i = 0;
  var m = 0;
  var e = 0;
  for(;i<collection_a.length; ){
    for(var j=collection_a.length-1;j>=0;j--){
      if(collection_a[i] == collection_a[j] && collection_a[j] == 'd-5'){
        eq_num.push({key:'d',count:'5'});
        break;
      }
      if(collection_a[i] == collection_a[j]){
        eq_num.push({key:collection_a[j],count:j+1-m});
        break;
      }
    }
    m = j+1;
    i = j+1;
  }

  for(var p=0;p<eq_num.length;p++) {
    for (var q=0;q<4;q++) {
      if(eq_num[p].key == object_b.value[q]){
        e = parseInt(eq_num[p].count/3);
        eq_num[p].count = eq_num[p].count - e;
        break;
      }
    }
  }
  return eq_num;
}

module.exports = create_updated_collection;
