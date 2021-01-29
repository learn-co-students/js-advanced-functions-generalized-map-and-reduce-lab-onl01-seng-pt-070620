
function map(sourceArray, genFunctions) {
    let newArr = [];
  for (let i = 0; i < sourceArray.length; i ++) {
    newArr.push(genFunctions(sourceArray[i]))
  }
  return newArr;
}

// function mapToNegativize(sourceArray) {
//     return sourceArray.map(el => el * -1);
// }

// function mapToNoChange(sourceArray) {
//     return sourceArray.map(el => el)
// }

// function mapToDouble(sourceArray) {
//     return sourceArray.map(el => el * 2)
// }

// function mapToSquare(sourceArray) {
//     return sourceArray.map(el => el * el)
// }


// reduce!!!

// function reduce(arr, reducer, start) {
//     let total;
//     if (start) {
//         let total = start;
//         for (let i = 0; arr.length; i ++) {
//         total = reducer(arr[i], total);
//         }
//     }
//     else {
//         total = arr[0];
//         for (let i = 0; arr.length; i ++) {
//         total = reducer(arr[i], total);
//         }
//     }
//     return total
// }

function reduce (array, funcy, start) {
  let tmp;

  if(start) {
      tmp = start;
      for (let i = 0; i < array.length; i++) {
          tmp = funcy(array[i], tmp);
      }
  }

  else {
      tmp = array[0];
      for (let i = 1; i < array.length; i++) {
          tmp = funcy(array[i], tmp);
      }
  }
  return tmp;
}


// function reduceToTotal(src, startingPoint=0) {
//     let total = startingPoint
//     for (let i = 0; i < src.length; i++ ) {
//       total = total + src[i]
//     }
//     return total
//   }
  
//   function reduceToAllTrue(src) {
//     for (let i = 0; i < src.length; i++ ) {
//       if (!src[i]) return false
//     }
//     return true
//   }
  
//   function reduceToAnyTrue(src) {
//     for (let i = 0; i < src.length; i++ ) {
//       if (src[i]) return true
//     }
//     return false
//   }