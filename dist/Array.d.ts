/**
 * @param { number } dimension
 * @param { number } initial
 */
export declare const dim: (dimension: number, initial: number) => number[];
/**
 * @param { array } element
 * @returns return the length of an element an params
 */
export declare const LengthOf: (element: any[]) => number;
/**
 * @param { [number] } array
 */
export declare const withoutDuplicate: <T>(array: T[]) => Set<T>;
export declare const findSum: (arr: number[], weight: number) => number[] | number;
export declare const beginAndEndOf: <T>(array: T[], begin: number, end: number) => T[];
export declare const zip: <T, U, R>(arr1: T[], arr2: U[], callback: (a: T, b: U) => R) => R[];
/**
 * @param { [number] } array
 * @returns { number }
 * Retuern the value max inside an array
 */
export declare const maxValue: (array: number[]) => number;
/**
 * @param { [number] } array
 */
export declare const minValue: (array: number[]) => number;
/**
 * @param { string } value
 * @param { [number] } array
 * Returns a new list containing the contents of the given list,
 * followed by the given element.
 */
export declare const append: <T>(value: T, array: T[]) => T[];
/**
 * @param {[number]} array
 */
export declare const allEqual: <T>(array: T[]) => boolean;
/**
 * @param { number } a
 * @param { number } b
 * @return return the difference between two arrays.
 */
export declare const difference: <T>(a: T[], b: T[]) => T[];
/**
 * @param { [number] } arr
 * @param { function } func
 * @returns removes elements from an array until
 *  the passed function returns true
 */
export declare const dropIf: <T>(arr: T[], func: (item: T) => boolean) => T[];
/**
 *
 * @param {[number]} array
 * @returns Return the last element of an array
 */
export declare const lastElement: <T>(array: T[]) => T;
