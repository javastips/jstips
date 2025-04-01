"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomString = exports.CountWords = exports.AccentToNoAccent = exports.trim = exports.replaceAll = exports.CamelCase = exports.LowerCase = exports.UpperCase = void 0;
/**
 *
 * @param {string} string
 * @returns Convert a string in UpperCase
 */
const UpperCase = function (string) {
    if (typeof string !== "string") {
        throw new Error('Argument must be a string ');
    }
    return string.toUpperCase();
};
exports.UpperCase = UpperCase;
/**
 *
 * @param {string} string
 * @returns Convert a string in LowerCase
 */
const LowerCase = function (string) {
    if (typeof string !== "string") {
        throw new Error('Argument must be a string ');
    }
    return string.toLowerCase();
};
exports.LowerCase = LowerCase;
/**
 *
 * @param {string} string
 * @returns Convert a string in CamelCase
 */
const CamelCase = function (string) {
    if (typeof string === "string") {
        return string.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index === 0 ? (0, exports.LowerCase)(word) : (0, exports.UpperCase)(word)).replace(/\s+/g, '');
    }
    else {
        throw new Error('Argument must be a string');
    }
};
exports.CamelCase = CamelCase;
// Replace word inside a string
const replaceAll = function (string, search, repl) {
    if (typeof string === "string" && typeof search === "string") {
        while (string.indexOf(search) !== -1)
            string = string.replace(search, repl);
        return string;
    }
    else {
        throw new Error(`${string} and ${search} must be a string`);
    }
};
exports.replaceAll = replaceAll;
// Trim string
const trim = function (text) {
    if (typeof text === "string") {
        return text.replace(/^\s+|\s+$/g, "");
    }
    else {
        throw new Error(`${text} must be a string`);
    }
};
exports.trim = trim;
/**
 *
 * @param {string} word
 * @returns A string with accents removed
 */
const AccentToNoAccent = function (word) {
    if (typeof word === "string") {
        // Use a simpler implementation that handles common accents
        return word.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
    else {
        throw new Error('Argument must be a string');
    }
};
exports.AccentToNoAccent = AccentToNoAccent;
/**
 * @param {string} string
 * @returns {string}
 */
const CountWords = function (string) {
    if (typeof string === 'string') {
        const splitIntoSpaces = (str = string) => str.split(" ");
        const count = (array) => array.length;
        const compose = (a, b) => (c) => a(b(c));
        const CountWords = compose(count, splitIntoSpaces);
        return CountWords(string);
    }
    else {
        throw new Error('Argument must be a string');
    }
};
exports.CountWords = CountWords;
/**
 * @param {string} sequence
 * @param {number} count
 * @param {object} options
 */
const randomString = function (sequence, count, options) {
    options = options || {};
    let result = sequence.split('').slice(0, count);
    if (options.capitalize) {
        result = result.map((w) => {
            const word = `${(0, exports.UpperCase)(w[0])} ${w.substring(1)}`;
            return word;
        });
        return result.join(' ');
    }
    return result;
};
exports.randomString = randomString;
