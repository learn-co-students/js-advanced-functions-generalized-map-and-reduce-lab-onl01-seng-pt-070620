function map(src, cb) {
    let value = []
    for (let i of src) {
      value.push(cb(i))
    }
    return value;
  }

  function reduce(src, cb, start){
    let total = (!!start) ? start : src[0]
    let i = (!!start) ? 0 : 1
  
    for (; i < src.length; i++) {
      total = cb(src[i], total)
    }
  
    return total;
  }