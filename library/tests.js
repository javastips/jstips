"use strict";
function define(func) {
  if(typeof func === "function") {
    func();
  } else {
    throw new Error('wrong type on your arguments');
  }
}

/**
 * @param { any } abstractValue
 * @param { any } initValue
 */
const isEqualTo = function(abstractValue,initValue) {
  return initValue === abstractValue ?  true : new Error(`Not equal : ${abstractValue} !== ${initValue}`);
}

module.exports = {
  define, isEqualTo
};




