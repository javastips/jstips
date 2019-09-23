const math = {};

/**
 * Write methods on linear algebra
 */
// addition of numbers
math.add = function(x,y) {
  return x + y;
}

// multiplication of numbers
math.mult = function(x,y) {
  if(x !== undefined || null  && y !== undefined || null ) return x * y;
  else return 0;
}

math.substract = function(x, y) {
  if(typeof x === "number" && typeof y === "number") {
      return x - y;
  } else {
      return new Error('Arguments must a numbers')
  }
}

math.odd = function(value) {
  if(typeof value === "number") {
    if(value !== 0) {
      return value % 2 == 1;
    } else {
      return 0;
    }
  } else {
    return new TypeError('Argument must be a Number');
  }
}

math.even = function (value) {
  while(typeof value === 'number') {
    if(value === 0) {
      return value;
    } else {
      return !odd(value);
    }
  }
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
  const a = Math.abs(oringA);
  const b = Math.abs(originB);

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

    if (a > b) {
      return euclidean(a % b, b);
    }
    return euclidean(b % a, a);
  }
}

/**
 * @param { number } a
 * @param { number } b
 * @return { number }
 */
math.square = function(a, b) {
  if(typeof a === "number" && typeof b === "number") {
    if(a && b !== 0) {
      let nbrS = 0, q = 1;
      while(q * q < a) q++;
      while(q * q <= b) {
        nbrS++;
        q++;
      }
      return nbrS;
    } else {
      return TypeError("Invalid argument");
    }
  } else {
    return TypeError('Arguments must be numbers');
  }
}



const {
  odd  , even ,
  matrix , add ,
  mult, euclidean,
  square
} = math;

module.exports = {
    odd , even ,
    add , mult ,
    matrix , euclidean,
    square
}
