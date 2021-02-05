// Add your functions here

function map(sourceArray, callback){
    let array = []
    for(let i = 0; i < sourceArray.length; i++){
        array.push(callback(sourceArray[i]))
    }
    return array
}

function reduce(sourceArray, callback, start){
    let array = (!!start) ? start : sourceArray[0]
    let i = (!!start) ? 0 : 1
    for (; i < sourceArray.length; i++) {
        array = callback(sourceArray[i], array)
    }
    return array
}