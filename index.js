// Add your functions here

function map(array,callback) {
    let newArray = []
    for(let i=0; i < array.length; i++){
        newArray.push(callback(array[i]))
    }
    return newArray
}


function reduce(sourceArray, callback, start){
    let array = (!!start) ? start : sourceArray[0]
    let i = (!!start) ? 0 : 1
    for (; i < sourceArray.length; i++) {
        array = callback(sourceArray[i], array)
    }
    return array
}