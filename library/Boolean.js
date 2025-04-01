"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isShortThan = exports.isNumeric = exports.isEmpty = void 0;
/**
 * @param {array}
 * @return boolean
 * @function isEmpty
 */
const isEmpty = function (value) {
    if (typeof value === 'object') {
        if (value.length === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        throw new Error('Argument must be an array');
    }
};
exports.isEmpty = isEmpty;
/**
 * @param {number} argument
 * @returns { boolean }
 */
const isNumeric = function (argument) {
    if (typeof argument === 'number') {
        if (argument !== null && !isNaN(argument)) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        throw new Error('Argument must be a number');
    }
};
exports.isNumeric = isNumeric;
/**
 *
 * @param {string} string
 * @param {number} value
 * @returns { boolean | Error | null }
 */
const isShortThan = function (string, value) {
    if (typeof string === 'string') {
        if (string.length < value) {
            return true;
        }
        else if (string.length === value) {
            return null;
        }
        else {
            return false;
        }
    }
    else {
        throw new Error("Argument must be a string");
    }
};
exports.isShortThan = isShortThan;
