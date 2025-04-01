/**
 * const t = "bonjour jeremy , tu vas bien ? "
 * const s = "jeremy";
 * console.time("moore");
 * console.log(BoyerMooreHorspool(s,t));
 * console.timeEnd('moore');
 * @param {string } needle
 * @param {string } haystack
 * @returns { number } position
 * The BoyerMooreHorspool it's a algorithm
 * for searching with a time of complexity of O(n)2
 */
export declare const BoyerMoreHorspool: (needle: string, haystack: string) => number;
/**
 * @param {number} length
 */
export declare const getFibonacciSequence: (length: number) => number[];
/**
 *
 * @param {[number]} array
 */
export declare const BubbleSort: <T>(array: T[]) => T[] | undefined;
