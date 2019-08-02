// Dimensions
Array.dim = function(dimension, initial) {
    var a = [];
    for(var i = 0; i < dimension; i++) {
        a[i] = initial;
    }
    return a;
}


const { dim  } = Array;

module.exports = {
    dim
};