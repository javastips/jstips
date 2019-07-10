// Dimensions
Array.dim = function(dimension, initial) {
    var a = [];
    for(var i = 0; i < dimension; i++) {
        a[i] = initial;
    }
    return a;
}

Array.matrix = function(m, n , initial) {
    var a , i , j, mat = [];
    for (i = 0; i < m; i++) {
        a = [];
        for (j = 0; j < n; j++) {
            a[j] = initial;
        }
        mat[i] = a;
    }
    return mat;
};

const { dim , matrix } = Array;

module.exports = {
    dim , matrix
}