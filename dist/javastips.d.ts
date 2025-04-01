/**
 * @param { [number]} list
 * @param { function } callback
 * Iterate over an input list, calling a provided function fn for each element in the list.
 */
export declare const each: <T>(list: T[] | Record<string, T>, callback: (value: T, index: number | string, list: T[] | Record<string, T>) => void) => void;
/**
  * @param { [number]} list
  * @param { function } callback
  * @returns Takes a function and a functor,
  * applies the function to each of the functor's values,
  * and returns a functor of the same shape.
 */
export declare const map: <T, U>(list: T[], callback: (value: T, index: number, list: T[]) => U) => U[];
export declare const filter: <T>(array: T[], callback: (item: T, index: number, list: T[]) => boolean) => T[];
/**
 * @param { [ number ]} array
 * @param { function } combine
 * @param { number } start
 * @returns
 * Returns a single item by iterating through the list,
 * successively calling the iterator function and passing
 * it an accumulator value and the current value from the array,
 * and then passing the result to the next call.
 */
export declare const easyReduce: <T, U>(array: T[], combine: (current: U, element: T) => U, start: U) => U;
/**
 * @param { [number] } list
 * @param { function } callback
 * @param { number } intiValue
 * @function implementation of reduce function
 * @return number
 *
 */
export declare const reduce: <T, U>(list: T[], callback: (item: T, memo: U) => U, initialValue?: U) => U;
/**
 * @param { number | string } value
 * @param { number | string  } inside
 * @return  boolean
 */
export declare const find: (value: any, inside: any[] | Record<string, any> | string) => boolean | null;
/**
 * @param { [number] } array
 * function to sort values inside an array
 * this function doesn't work like sort function used in es6
 * this implementatio as inspired from bubble sort .
*/
export declare const sort: <T>(array: T[]) => T[];
/**
 * @param { string } element
 * @returns
 * La fonction by prend une string comme argument et
 *  renvoie une fonction de comparaison qui peut etre utilisée pour trier
 * un tableau d'objets contenant cet argument
 *
 * Par : Douglas Crofford.
 */
export declare const by: <T extends Record<string, any>>(element: string) => (o: T, p: T) => number;
/**
 * @param { [number] } array
 * @param { number } number
 */
export declare const linearSearch: (array: number[], number: number) => boolean | void;
/**
 * @param { string | [number] } character
 * @returns { object } reversed
 */
export declare const reverse: <T>(character: T[]) => T[];
/**
 * @param { function } fn
 * @returns { function } A function that returns the negation of a  function.
 */
export declare const not: <T extends (...args: any[]) => boolean>(fn: T) => (...args: Parameters<T>) => boolean;
/**
 * @param { object } obj
 * @returns
 * Take an object and convert it by assign a get and set
 * to this object
 */
export declare const convert: <T extends Record<string, any>>(obj: T) => void;
/**
 * @param { function } callback
 * @returns { function }
 * Wraps a function of any arity
 * (including nullary) in a function that accepts exactly 1 parameter.
 * Any extraneous parameters will not be passed to the supplied function.
 */
export declare const unary: <T, R>(callback: (arg: T) => R) => (arg: T) => R;
/**
 * @param { function } fn
 * @returns { string | boolean }
 * Accepts a function fn and returns a function that guards
 * invocation of fn such that fn can only ever be called once,
 * no matter how many times the returned function is invoked.
 */
export declare const once: <T extends (...args: any[]) => any>(fn: T) => (...args: Parameters<T>) => ReturnType<T> | undefined;
/**
 * @param { number | string  } value
 * @param { [number] | [string] } elements
 * @returns {[number]}
 * Returns the first n elements of the given list, string,
 * (or object with a take method)
 */
export declare const take: <T>(value: number, elements: T[]) => T[];
/**
 * @returns
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'.
 * Does not attempt to distinguish user Object types any further,
 * reporting them all as 'Object'.
 */
export declare const DefType: (param: any) => string | undefined;
/**
 * @param { Object  } obj
 * @param { String } propertyName
 * @param { String } value
 * @returns { void } Take an object has a first argument and set the selected value
 * or added a value with a prop.
 */
export declare const set: <V>(obj: Record<string, any>, propertyName: string, value: V) => void;
