"use strict";

export function define(func: () => void): void {
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
export const isEqualTo = function(abstractValue: any, initValue: any): boolean | Error {
  return initValue === abstractValue ? true : new Error(`Not equal : ${abstractValue} !== ${initValue}`);
}