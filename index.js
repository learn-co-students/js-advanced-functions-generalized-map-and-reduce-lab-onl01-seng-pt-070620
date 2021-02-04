function map(array, func) {
    let ツ = []
    for (let i = 0; i < array.length; i++ ){ 
        ツ.push(func(array[i]))
    }
    return ツ
}

function reduce(array, func, start=0) {
    let ツ = (!!start) ? start : array[0]
    let シ = (!!start) ? 0 : 1
    for (; シ < array.length; シ++ ){ 
        ツ = func(array[シ], ツ)
    }
    return ツ
}