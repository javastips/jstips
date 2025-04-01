"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEqualTo = void 0;
exports.define = define;
function define(func) {
    if (typeof func === "function") {
        func();
    }
    else {
        throw new Error('wrong type on your arguments');
    }
}
/**
 * @param { any } abstractValue
 * @param { any } initValue
 */
const isEqualTo = function (abstractValue, initValue) {
    return initValue === abstractValue ? true : new Error(`Not equal : ${abstractValue} !== ${initValue}`);
};
exports.isEqualTo = isEqualTo;
