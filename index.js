function map(sourceArray, a) {
    let result = []
    for (let i = 0; i < sourceArray.length; i++) {
        result.push(a(sourceArray[i]))
    }
    return result
}

function reduce(sourceArray, a, startingPoint) {
    let total = !!startingPoint ? startingPoint : sourceArray[0]

    if (startingPoint) {
    for (let i = 0; i < sourceArray.length; i++) {
        total = a(sourceArray[i], total)
        }
    } else {
        for (let i = 1; i < sourceArray.length; i++) {
            total = a(sourceArray[i], total)
        }    
    }
    return total
}