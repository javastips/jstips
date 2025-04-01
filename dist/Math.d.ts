/**
 * @param { number } x
 * @param { number } y
 * Addition deux valeurs
 */
export declare const add: (x: number, y: number) => number;
/**
 * @param { number } x
 * @param { number } y
 * @returns Make a multiplication operation
 */
export declare const mult: (x: number, y: number) => number;
/**
 * @param { number } x
 * @param { number } y
 * Soustrait deux valeurs
 */
export declare const substract: (x: number, y: number) => number;
/**
 * @param { number } value
 */
export declare const odd: (value: number) => boolean | number;
/**
 * @param { number } value
 */
export declare const even: (value: number) => boolean | number;
/**
 *
 * @param {number} m
 * @param {number} n
 * @param {number} initial
 * @returns Return numbers formated on matrix
 */
export declare const matrix: (m: number, n: number, initial: number) => number[][];
/**
 * @param {number} originalA
 * @param {number} originalB
 * @returns The eucludian value of  numbers
 */
export declare const euclidean: (oringA: number, originB: number) => number | null;
/**
 *
 * @param {number} number
 */
export declare const exponential: (number: number) => string;
/**
 * @param { number } a
 * @param { number } b
 * @return { number }
 */
export declare const square: (a: number, b: number) => number;
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
export declare const EMC2: (mass: number) => EMC2Result | undefined;
/**
 *
 * @param {number} num
 * @returns Generates primes up to a given number, using the Sieve of Eratosthenes.
 */
export declare const primes: (num: number) => number[];
export {};
