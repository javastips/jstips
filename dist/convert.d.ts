/**
 * @param { number | string} value
 * @param { number } position
 * @returns { number }
 * The functon take a value and a position ,
 * by default the postion is equal to 1,
 * and parse the value to float.
 * The position is the statement of the number of 0 before
 * the value

 */
export declare const Floatify: (value: number | string, position?: number) => string;
export declare const Clone: <T>(object: T) => T;
