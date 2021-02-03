const array = [1, 2, 3, -9];

function map(array, callBack){
    let newArray = [];
    for(const element of array){
        newArray.push(callBack(element));
    }

    return newArray;
}

//We can invoke map function like below and we donot need to call mapToSquare, mapToDouble, ...
//We just call map!
map(array, function(a){return a * a});
map(array, function(a){return a * 2});

function reduce(array, callBack, start){
    //we use i because without it when we don't pass start and we need to get total of array,
    //we set the total to the first element and add the remaining elements to that.
    let total, i;
    if (start){
        total = start;
        i = 0;
    } else {
        total = array[0];
        i = 1
    }

    for(i; i < array.length; i++){
       total = callBack(array[i], total)
    }
    return total;
}

reduce(array, function(a, total){ return a + total; }, 6)  // 3

console.log(reduce([1,2,3], function(a,total){ return a + total; }))   //6

console.log(reduce([1, 2, true, "razmatazz"], function(a, total){
return  !!a && !!total;
}))  //true