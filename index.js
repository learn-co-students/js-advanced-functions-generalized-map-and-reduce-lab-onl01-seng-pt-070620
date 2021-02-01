function map(obj, fn) {
    const array = []
    for (const key in obj) {
        array.push(fn(obj[key]))
    }
    return array
}

function reduce(src, fn, accumlator) {
    const keys = Object.keys(src)
    let i = 1
    if (accumlator) {
        i = 0
    } else {
        accumlator = src[keys[0]]
    }
    for (i; i < keys.length; i++) {
        accumlator = fn(accumlator, src[keys[i]])
    }
    return accumlator
}