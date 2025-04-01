"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.primes = exports.EMC2 = exports.square = exports.exponential = exports.euclidean = exports.matrix = exports.even = exports.odd = exports.substract = exports.mult = exports.add = void 0;
/**
 * @param { number } x
 * @param { number } y
 * Addition deux valeurs
 */
const add = function (x, y) {
    if (x !== undefined && y !== undefined) {
        if (typeof x === "number" && typeof y === "number") {
            if (x !== null && y !== null) {
                return x + y;
            }
            else {
                throw new Error('Argument must be different of null or undefined');
            }
        }
        else {
            throw new Error('Argument must be a number');
        }
    }
    throw new Error('Arguments must be provided');
};
exports.add = add;
/**
 * @param { number } x
 * @param { number } y
 * @returns Make a multiplication operation
 */
const mult = function (x, y) {
    if (x !== undefined && x !== null && y !== undefined && y !== null)
        return x * y;
    else
        return 0;
};
exports.mult = mult;
/**
 * @param { number } x
 * @param { number } y
 * Soustrait deux valeurs
 */
const substract = function (x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x - y;
    }
    else {
        throw new Error('Arguments must a numbers');
    }
};
exports.substract = substract;
/**
 * @param { number } value
 */
const odd = function (value) {
    if (typeof value === "number") {
        if (value !== 0) {
            return value % 2 == 1;
        }
        else {
            return 0;
        }
    }
    else {
        throw new Error('Argument must be a Number');
    }
};
exports.odd = odd;
/**
 * @param { number } value
 */
const even = function (value) {
    if (typeof value === 'number') {
        if (value === 0) {
            return value;
        }
        else {
            return !(0, exports.odd)(value);
        }
    }
    throw new Error('Argument must be a number');
};
exports.even = even;
/**
 *
 * @param {number} m
 * @param {number} n
 * @param {number} initial
 * @returns Return numbers formated on matrix
 */
const matrix = function (m, n, initial) {
    let a, i, j, mat = [];
    for (i = 0; i < m; i++) {
        a = [];
        for (j = 0; j < n; j++) {
            a[j] = initial;
        }
        mat[i] = a;
    }
    return mat;
};
exports.matrix = matrix;
/**
 * @param {number} originalA
 * @param {number} originalB
 * @returns The eucludian value of  numbers
 */
const euclidean = function (oringA, originB) {
    const a = Math.abs(oringA);
    const b = Math.abs(originB);
    if (typeof a === 'number' && typeof b === 'number') {
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
            return (0, exports.euclidean)(a % b, b);
        }
        return (0, exports.euclidean)(b % a, a);
    }
    return null;
};
exports.euclidean = euclidean;
/**
 *
 * @param {number} number
 */
const exponential = function (number) {
    const num = number;
    if (typeof number === "number") {
        return num.toExponential();
    }
    else {
        throw new Error(`argument must be an number`);
    }
};
exports.exponential = exponential;
/**
 * @param { number } a
 * @param { number } b
 * @return { number }
 */
const square = function (a, b) {
    if (typeof a === "number" && typeof b === "number") {
        if (a !== 0 && b !== 0) {
            let nbrS = 0, q = 1;
            while (q * q < a)
                q++;
            while (q * q <= b) {
                nbrS++;
                q++;
            }
            return nbrS;
        }
        else {
            throw new Error("Invalid argument");
        }
    }
    else {
        throw new Error('Arguments must be numbers');
    }
};
exports.square = square;
/**
 * @param {number} mass
 * @argument C speed of the light
 * @returns Calculate how much energy they could
 * get if they transformed their mass.
 */
const EMC2 = function (mass) {
    const C = Number.parseFloat('2.99792458');
    let energyJoules = Number.parseFloat('0');
    let massKg = Number.parseFloat('0');
    if (mass) {
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
};
exports.EMC2 = EMC2;
/**
 *
 * @param {number} num
 * @returns Generates primes up to a given number, using the Sieve of Eratosthenes.
 */
const primes = function (num) {
    let state = num;
    let arr = Array.from({
        length: num - 1
    }).map((x, i) => i + 2), sqroot = Math.floor(Math.sqrt(state)), numTillSqrt = Array.from({
        length: sqroot - 1
    }).map((x, i) => i + 2);
    numTillSqrt.forEach(function (x) {
        return arr = arr.filter(y => y % x !== 0 || y === x);
    });
    return arr;
};
exports.primes = primes;
