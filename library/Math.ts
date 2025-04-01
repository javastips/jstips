/**
 * @param { number } x
 * @param { number } y
 * Addition deux valeurs
 */
export const add = function(x: number, y: number): number {
  if(x !== undefined && y !== undefined) {
    if(typeof x === "number" && typeof y === "number" ) {
      if(x !== null && y !== null) {
        return x + y;
      } else {
        throw new Error('Argument must be different of null or undefined');
      }
    } else {
      throw new Error('Argument must be a number');
    }
  }
  throw new Error('Arguments must be provided');
}

/**
 * @param { number } x
 * @param { number } y
 * @returns Make a multiplication operation
 */
export const mult = function(x: number, y: number): number {
  if(x !== undefined && x !== null && y !== undefined && y !== null) return x * y;
  else return 0;
}

/**
 * @param { number } x
 * @param { number } y
 * Soustrait deux valeurs
 */
export const substract = function(x: number, y: number): number {
  if(typeof x === "number" && typeof y === "number") {
    return x - y;
  } else {
    throw new Error('Arguments must a numbers');
  }
}

/**
 * @param { number } value
 */
export const odd = function(value: number): boolean | number {
  if(typeof value === "number") {
    if(value !== 0) {
      return value % 2 == 1;
    } else {
      return 0;
    }
  } else {
    throw new Error('Argument must be a Number');
  }
}


/**
 * @param { number } value
 */
export const even = function (value: number): boolean | number {
  if(typeof value === 'number') {
    if(value === 0) {
      return value;
    } else {
      return !odd(value);
    }
  }
  throw new Error('Argument must be a number');
}

/**
 *
 * @param {number} m
 * @param {number} n
 * @param {number} initial
 * @returns Return numbers formated on matrix
 */
export const matrix = function(m: number, n: number, initial: number): number[][] {
  let a: number[], i: number, j: number, mat: number[][] = [];
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
 * @returns The eucludian value of  numbers
 */
export const euclidean = function(oringA: number, originB: number): number | null {
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
  return null;
}
/**
 *
 * @param {number} number
 */
export const exponential = function(number: number): string {
  const num = number;
  if(typeof number === "number") {
    return num.toExponential();
  } else {
    throw new Error(`argument must be an number`);
  }
}

/**
 * @param { number } a
 * @param { number } b
 * @return { number }
 */
export const square = function(a: number, b: number): number {
  if(typeof a === "number" && typeof b === "number") {
    if(a !== 0 && b !== 0) {
      let nbrS = 0, q = 1;
      while(q * q < a) q++;
      while(q * q <= b) {
        nbrS++;
        q++;
      }
      return nbrS;
    } else {
      throw new Error("Invalid argument");
    }
  } else {
    throw new Error('Arguments must be numbers');
  }
}

interface EMC2Result {
  equation: string;
  masse: string;
  "speed of light": string;
  energy: string;
}

/**
 * @param {number} mass
 * @argument C speed of the light
 * @returns Calculate how much energy they could
 * get if they transformed their mass.
 */
export const EMC2 = function(mass: number): EMC2Result | undefined {
  const C = Number.parseFloat('2.99792458');
  let energyJoules = Number.parseFloat('0');
  let massKg = Number.parseFloat('0');
  if(mass) {
    massKg = Number.parseFloat(mass.toFixed(1));
    energyJoules = massKg * C * C;
    return {
      equation: "e = m * C^2...",
      masse: `m = ${massKg} kg`,
      "speed of light": `C = ${C} m/s`,
      energy: `${energyJoules} joules of energy!`
    };
  }
  return undefined;
}

/**
 *
 * @param {number} num
 * @returns Generates primes up to a given number, using the Sieve of Eratosthenes.
 */
export const primes = function(num: number): number[] {
  let state = num;
  let arr = Array.from({
    length: num - 1
  }).map((x, i) => i + 2),
  sqroot = Math.floor(Math.sqrt(state)),
  numTillSqrt = Array.from({
    length: sqroot - 1
  }).map((x,i) => i + 2);

  numTillSqrt.forEach(function(x) {
    return arr = arr.filter(y => y % x !== 0 || y === x );
  });

  return arr;
}