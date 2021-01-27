// Add your functions here
function map(array, func) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push(func(array[i]))
    }
    return newArray
}

function reduce(array, func, start) {
    let result = (!!start) ? start : array[0]
    let i = (!!start) ? 0 : 1
    for (; i < array.length; i++) {
        result = func(array[i], result)
    }
    return result
}