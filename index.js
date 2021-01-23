// Add your functions here
const map = function(arr, fn) {
    let r = [];
    for( let element of arr ) {
      r.push(fn(element));
    }
    return r;
  }
  
  function reduce(arr, fn, base) {
      let total
      let i = 0
  
      if (base) {
          total = base
      } else {
          total = arr[0]
          i++
      }
  
      for (i; i < arr.length; i++) {
          total = fn(arr[i], total)
      }
      return total
  }