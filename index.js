// Add your functions here

function map(src, func) {
  let r = []

  for (let i = 0; i < src.length; i++) {
    let e = src[i]
    r.push(func(e))
  }

  return r;
}

function reduce(src, func, starting){
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    r = func(src[i], r)
  }

  return r;
}