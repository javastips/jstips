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


// Array.findSum = function() {

// }


const { dim, LengthOf } = Array;

module.exports = {
    dim , LengthOf
};