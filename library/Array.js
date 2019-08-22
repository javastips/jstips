// Dimensions
Array.dim = function(dimension, initial) {
    var a = [];
    for(var i = 0; i < dimension; i++) {
        a[i] = initial;
    }
    return a;
}

// return the length of an element an params
Array.LengthOf = function(element) {
    if(typeof element === "object")  return element.length;
    else return new Error('Argument must be an array')
};

Array.withoutDuplicate = function(array) {
    var newArray = new Set();
    array.forEach((element, index) => newArray.add(element))
    return newArray;
}

Array.findSum = function(arr, weight) {
    var hastable = {};
    var len = Array.LengthOf(arr); // lenght of the array
    console.log( `length of the array: ${len}`); // check state
    for (let i = 0; i < len; i++) {
        var currentEl = arr[i], // looping of all elements
            difference = weight - currentEl; 
            console.log(currentEl); // range
            console.log(difference); // values not inside of the range between the weigth and the array
        if (hastable[currentEl] !== undefined)  {
            return [i, hastable[weight - currentEl]];
        } else {
            hastable[difference] = i;
        }    
    }
    return -1;
}

Array.beginAndEndOf = function(array, begin , end) {
    while (array) {
        partArray = [];
        if(!begin && !end) {
            return array;
        }
        for(var i = begin; i < end; i++ ) {
            partArray.push(array[i]);
        }
        return partArray;
    }
}


var array = [1, 2, 5, 7, 9];
console.log(Array.beginAndEndOf(array, 1, 2));
console.log(Array.beginAndEndOf([...array ], 2 , 4));

const { dim, LengthOf } = Array;

module.exports = {
    dim , LengthOf
};