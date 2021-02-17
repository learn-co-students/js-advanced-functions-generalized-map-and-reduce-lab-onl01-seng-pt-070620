// Add your functions here

const map = (a, func) => {
    const returnValue = [];
    for(const i of a){
        returnValue.push(func(i))
    }
    return returnValue
}

function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1

    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }

    return r;
  }
