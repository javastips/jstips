"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lastElement = exports.dropIf = exports.difference = exports.allEqual = exports.append = exports.minValue = exports.maxValue = exports.zip = exports.beginAndEndOf = exports.findSum = exports.withoutDuplicate = exports.LengthOf = exports.dim = void 0;
/**
 * @param { number } dimension
 * @param { number } initial
 */
const dim = function (dimension, initial) {
    if (typeof dimension === "number" && typeof initial === "number") {
        let a = new Array();
        for (let i = 0; i < dimension; i++) {
            a[i] = initial;
        }
        return a;
    }
    else {
        throw new Error('Invalid arguments');
    }
};
exports.dim = dim;
/**
 * @param { array } element
 * @returns return the length of an element an params
 */
const LengthOf = function (element) {
    if (Array.isArray(element)) {
        return element.length;
    }
    throw new Error('Argument must be an array');
};
exports.LengthOf = LengthOf;
/**
 * @param { [number] } array
 */
const withoutDuplicate = function (array) {
    let newArray = new Set();
    if (Array.isArray(array)) {
        array.forEach((element) => newArray.add(element));
        return newArray;
    }
    else {
        throw new Error(`Argument ${array} must be an array`);
    }
};
exports.withoutDuplicate = withoutDuplicate;
const findSum = function (arr, weight) {
    let hastable = {};
    let len = (0, exports.LengthOf)(arr);
    for (let i = 0; i < len; i++) {
        let currentEl = arr[i], difference = weight - currentEl;
        if (hastable[currentEl] !== undefined) {
            return [i, hastable[weight - currentEl]];
        }
        else {
            hastable[difference] = i;
        }
    }
    return -1;
};
exports.findSum = findSum;
const beginAndEndOf = function (array, begin, end) {
    if (Array.isArray(array)) {
        let partArray = [];
        if (!begin && !end) {
            return array;
        }
        for (var i = begin; i < end; i++) {
            partArray.push(array[i]);
        }
        return partArray;
    }
    throw new Error('Argument must be an array');
};
exports.beginAndEndOf = beginAndEndOf;
const zip = function (arr1, arr2, callback) {
    if (typeof callback === 'function') {
        if (arr1 && arr2 !== undefined) {
            let index, result = [];
            for (index = 0; index < Math.min(arr1.length, arr2.length); index++) {
                result.push(callback(arr1[index], arr2[index]));
            }
            return result;
        }
        else {
            throw new Error('Arguments must be an array');
        }
    }
    else {
        throw new Error('last argument must be an function expression');
    }
};
exports.zip = zip;
/**
 * @param { [number] } array
 * @returns { number }
 * Retuern the value max inside an array
 */
const maxValue = function (array) {
    if (Array.isArray(array)) {
        if (array.length < 0) {
            return array[0];
        }
        else {
            return Math.max(...array);
        }
    }
    else {
        throw new Error('Argument must be an Array');
    }
};
exports.maxValue = maxValue;
/**
 * @param { [number] } array
 */
const minValue = function (array) {
    if (Array.isArray(array)) {
        if (array.length < 0) {
            return array[0];
        }
        else {
            return Math.min(...array);
        }
    }
    else {
        throw new Error('Argument must be an Array');
    }
};
exports.minValue = minValue;
/**
 * @param { string } value
 * @param { [number] } array
 * Returns a new list containing the contents of the given list,
 * followed by the given element.
 */
const append = function (value, array) {
    var newArray = array;
    if (value !== undefined && value !== null) {
        if (Array.isArray(array)) {
            newArray.push(value);
            return newArray;
        }
        throw new Error(`Argument must be an array`);
    }
    else {
        throw new Error('Wrong type for your value');
    }
};
exports.append = append;
/**
 * @param {[number]} array
 */
const allEqual = function (array) {
    if (Array.isArray(array)) {
        if ((0, exports.LengthOf)(array) <= 0) {
            return true;
        }
        else {
            return array.every(value => value === array[0]);
        }
    }
    else {
        throw new Error('Argument must be an array');
    }
};
exports.allEqual = allEqual;
/**
 * @param { number } a
 * @param { number } b
 * @return return the difference between two arrays.
 */
const difference = function (a, b) {
    if (Array.isArray(a) && Array.isArray(b)) {
        const s = new Set(b);
        return a.filter(x => !s.has(x));
    }
    else {
        throw new Error('Arguments must be an array');
    }
};
exports.difference = difference;
/**
 * @param { [number] } arr
 * @param { function } func
 * @returns removes elements from an array until
 *  the passed function returns true
 */
const dropIf = function (arr, func) {
    if (Array.isArray(arr) && typeof func === "function") {
        while ((0, exports.LengthOf)(arr) > 0 && !func(arr[0]))
            arr = arr.slice(1);
        return arr;
    }
    throw new Error('Invalid arguments');
};
exports.dropIf = dropIf;
/**
 *
 * @param {[number]} array
 * @returns Return the last element of an array
 */
const lastElement = function (array) {
    if (!Array.isArray(array) || (0, exports.LengthOf)(array) === 0)
        throw new Error("Argument must be an array with values");
    else
        return array[(0, exports.LengthOf)(array) - 1];
};
exports.lastElement = lastElement;
