function map(src, cb) {
    let value = []
    for (let i of src) {
      value.push(cb(i))
    }
    return value;
  }

  function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
  }