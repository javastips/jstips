const math = {};

/**
 * @param { number } x
 * @param { number } y
 * Addition deux valeurs
 */
math.add = function(x,y) {
  while(x && y ) {
    if(typeof x === "number" && typeof y === "number" ) {
      if(x !== undefined && y !== undefined || x !== null && y !== null ) {
        return x + y;
      } else {
        return new TypeError('Argument must be different of null or undefined');
      }
    } else {
      return new TypeError('Argument must be a number');
    }
  }
}

/**
 * @param { number } x
 * @param { number } y
 * multiplie deux valeurs
 */
math.mult = function(x,y) {
  if(x !== undefined || null  && y !== undefined || null ) return x * y;
  else return 0;
}

/**
 * @param { number } x
 * @param { number } y
 * Soustrait deux valeurs
 */
math.substract = function(x, y) {
  if(typeof x === "number" && typeof y === "number") {
    return x - y;
  } else {
    return new Error('Arguments must a numbers')
  }
}

/**
 * @param { number } value
 */
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


/**
 * @param { number } value
 */
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
  let a , i , j, mat = [];
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
 * @returns
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
