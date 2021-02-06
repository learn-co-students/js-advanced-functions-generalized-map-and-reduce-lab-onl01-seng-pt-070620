// Add your functions here
function map(arr, fn){
  let newArr = []
  for(let i = 0; i < arr.length; i++){
    newArr.push(fn(arr[i]))
  }
  return newArr
}

function reduce(arr, fn, init){
  let finish = (!!init) ? init : arr[0]
  let i = (!!init) ? 0 : 1
  for (; i < arr.length; i++){
    finish = fn(arr[i], finish)
  }
  return finish
}
