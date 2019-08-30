const math = {};

/** 
 * Write methods on linear algebra
 * 
 */
// addition of numbers
math.add = function(x,y) {
    return x + y;
}

// multiplication of numbers 
math.mult = function(x,y) {
    return x * y;
}

math.substract = function(x, y) {
    if(typeof x === "number" && typeof y === "number") {
        return x - y;
    } else {
        return new Error('Arguments must a numbers')
    }
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

/**
 * @param {number} originalA
 * @param {number} originalB
 * @return {number|null}
 */
math.euclidean = function(oringA , originB) {
    const a = Math.abs(oringA)
    const b = Math.abs(originB)
    if(typeof a === 'number' && typeof b === 'number') {
        if (a === 0 && b === 0) {
            return null;
          }
        
          if (a === 0 && b !== 0) {
            return b;
          }
        
          if (a !== 0 && b === 0) {
            return a;
          }
        
          // Normally we need to do subtraction (a - b) but to prevent
          // recursion occurs to often we may shorten subtraction to (a % b).
          // Since (a % b) is normally means that we've subtracted b from a
          // many times until the difference became less then a.
        
          if (a > b) {
            return euclidean(a % b, b);
          }
        
          return euclidean(b % a, a);
    }
}


const { odd  , even , matrix , add , mult } = math;

module.exports = {
    odd , even , add , mult , matrix
}