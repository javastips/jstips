const math = {};

// addition of numbers
math.additon = function(x,y) {
    return x + y;
}

// multiplication of numbers 
math.multiplication = function(x,y) {
    return x * y;
}

math.odd = function(v) {
    return v % 2 == 1;
}

math.even = function (v) {
    return !odd(v);
}

math.matrix = function(m, n , initial) {
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


// console.log(math);

module.export