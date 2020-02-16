"use strict";
function define(func) {
  if(typeof func === "function") {
    func();
  } else {
    throw new Error('wrong type on your arguments');
  }
}

/**
 * @function
 *
  console.log(isEqualTo(1,2));
 *
 */
function isEqualTo(abstractValue,initValue) {
  return initValue === abstractValue ?  true : new Error(`Not equal : ${abstractValue} !== ${initValue}`);
}



export default {
  define,
  isEqualTo
}
