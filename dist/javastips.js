"use strict";
var javastips = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // library/bundle.ts
  var bundle_exports = {};
  __export(bundle_exports, {
    AccentToNoAccent: () => AccentToNoAccent,
    BoyerMoreHorspool: () => BoyerMoreHorspool,
    BubbleSort: () => BubbleSort,
    CamelCase: () => CamelCase,
    Clone: () => Clone,
    CountWords: () => CountWords,
    DefType: () => DefType,
    EMC2: () => EMC2,
    Floatify: () => Floatify,
    LengthOf: () => LengthOf,
    LowerCase: () => LowerCase,
    TimeOfRunning: () => TimeOfRunning,
    UpperCase: () => UpperCase,
    add: () => add,
    allEqual: () => allEqual,
    append: () => append,
    beginAndEndOf: () => beginAndEndOf,
    by: () => by,
    convert: () => convert,
    define: () => define,
    difference: () => difference,
    dim: () => dim,
    dropIf: () => dropIf,
    each: () => each,
    easyReduce: () => easyReduce,
    euclidean: () => euclidean,
    even: () => even,
    filter: () => filter,
    find: () => find,
    findSum: () => findSum,
    getFibonacciSequence: () => getFibonacciSequence,
    isEmpty: () => isEmpty,
    isEqualTo: () => isEqualTo,
    isNumeric: () => isNumeric,
    isShortThan: () => isShortThan,
    lastElement: () => lastElement,
    linearSearch: () => linearSearch,
    loggerHelper: () => loggerHelper,
    map: () => map,
    matrix: () => matrix,
    maxValue: () => maxValue,
    minValue: () => minValue,
    mult: () => mult,
    not: () => not,
    odd: () => odd,
    once: () => once,
    primes: () => primes,
    randomString: () => randomString,
    reduce: () => reduce,
    replaceAll: () => replaceAll,
    reverse: () => reverse,
    set: () => set,
    sort: () => sort,
    square: () => square,
    substract: () => substract,
    take: () => take,
    trim: () => trim,
    unary: () => unary,
    withoutDuplicate: () => withoutDuplicate,
    zip: () => zip
  });

  // library/algorithem.ts
  var BoyerMoreHorspool = function(needle, haystack) {
    let skip = 0;
    const preprocess = function preprocess2(word) {
      const table = {};
      for (let i = 0; i < word.length - 1; i++) {
        table[word[i]] = word.length - i - 1;
      }
      return table;
    };
    const baseTable = preprocess(needle);
    while (haystack.length - skip >= needle.length) {
      let i = needle.length - 1;
      while (haystack[skip + i] === needle[i]) {
        if (i === 0) {
          return skip;
        }
        i--;
      }
      skip += baseTable[haystack[skip + needle.length - 1]] || needle.length;
    }
    return -1;
  };
  var getFibonacciSequence = function(length) {
    var n, ref, results;
    results = [1];
    const fibonacci = function* () {
      var current, previous;
      [previous, current] = [1, 1];
      while (true) {
        [previous, current] = [current, previous + current];
        yield current;
      }
    };
    ref = fibonacci();
    for (n of ref) {
      results.push(n);
      if (results.length === length) {
        break;
      }
    }
    return results;
  };
  var BubbleSort = function(array) {
    let arrayLength = array.length;
    if (!arrayLength) {
      return;
    }
    if (Array.isArray(array)) {
      const swap = (array2, index1, index2) => {
        let temp = array2[index1];
        array2[index1] = array2[index2];
        array2[index2] = temp;
      };
      for (let i = 0; i < arrayLength; i++) {
        for (let j = 0; j <= i; j++) {
          if (array[i] < array[j]) {
            swap(array, i, j);
          }
        }
      }
      return array;
    } else {
      throw new Error("Argument must be an array");
    }
  };

  // library/javastips.ts
  var each = function(list, callback) {
    if (Array.isArray(list)) {
      for (var i = 0; i < list.length; i++) {
        callback(list[i], i, list);
      }
    } else {
      for (var key in list) {
        callback(list[key], key, list);
      }
    }
  };
  var map = function(list, callback) {
    var storage = [];
    each(list, function(v, i, list2) {
      storage.push(callback(v, i, list2));
    });
    return storage;
  };
  var filter = function(array, callback) {
    var store = [];
    each(array, function(item, i, list) {
      if (callback(item, i, list)) store.push(item);
    });
    return store;
  };
  var easyReduce = function(array, combine, start) {
    let current = start;
    for (let element of array) {
      current = combine(current, element);
    }
    return current;
  };
  var reduce = function(list, callback, initialValue) {
    let memo = initialValue;
    if (Array.isArray(list)) {
      for (var i = 0; i < list.length; i++) {
        if (i === 0 && memo === void 0) {
          memo = list[0];
          i++;
        } else {
          memo = callback(list[i], memo);
        }
        callback(list[i], memo);
      }
      return memo;
    } else {
      throw new Error("Argument must be an array");
    }
  };
  var find = function(value, inside) {
    let finded = null;
    if (Array.isArray(inside)) {
      each(inside, (v) => {
        if (v === value) {
          finded = true;
        } else {
          finded = false;
        }
      });
    } else if (typeof inside === "object") {
      var values = Object.values(inside);
      for (let v of values) {
        if (Object.is(v, value)) {
          finded = true;
        }
        finded = false;
      }
    } else if (typeof inside === "string") {
      if (inside.length <= value) {
        console.error("Cannot find the value , string so short");
      } else {
        var classifier = inside.split(" ").filter((v) => v === value);
        if (classifier == value) finded = true;
        else finded = false;
      }
    }
    return finded;
  };
  var sort = function(array) {
    let len = array.length;
    if (!len) {
      return array;
    }
    if (Array.isArray(array)) {
      const swap = (array2, index1, index2) => {
        let temp = array2[index1];
        array2[index1] = array2[index2];
        array2[index2] = temp;
      };
      for (let i = 0; i < len; i++) {
        for (let j = 0; j <= i; j++) {
          if (array[i] < array[j]) {
            swap(array, i, j);
          }
        }
      }
      return array;
    } else {
      throw new Error("Argument must be an array");
    }
  };
  var by = function(element) {
    return function(o, p) {
      var a, b;
      if (typeof o === "object" && typeof p === "object" && o && p) {
        a = o[element];
        b = p[element];
        if (a === b) {
          return 0;
        }
        if (typeof a === typeof b) {
          return a < b ? -1 : 1;
        }
        return typeof a < typeof b ? -1 : 1;
      } else {
        throw new Error(`Expected an object when sorting by ${element}`);
      }
    };
  };
  var linearSearch = function(array, number) {
    var size = array.length, position = 0;
    if (Array.isArray(array)) {
      for (var i = 0; i < size; i++) {
        if (array[i] == number) {
          position = i;
          console.log(`Position: ${position} .`);
          return;
        }
      }
      return false;
    } else {
      throw new Error("Wrong type ! , you need an array");
    }
  };
  var reverse = function(character) {
    let reversed = [], len = character.length;
    for (var i = len - 1; i >= 0; i--) {
      reversed.push(character[i]);
    }
    return reversed;
  };
  var not = function(fn) {
    if (typeof fn === "function") {
      return function negated(...args) {
        return !fn(...args);
      };
    }
    throw new Error("Argument must be an function");
  };
  var convert = function(obj) {
    if (typeof obj === "object") {
      Object.keys(obj).forEach((key) => {
        let intervalValue = obj[key];
        Object.defineProperty(obj, key.toString(), {
          get() {
            console.log(`init value is ${intervalValue}`);
            return intervalValue;
          },
          set(newValue) {
            intervalValue = newValue;
            console.log(`init value is ${intervalValue} and the new is ${newValue}`);
          },
          enumerable: true,
          configurable: true
        });
      });
    } else {
      throw new Error(`Object ${obj} must be a object type`);
    }
  };
  var unary = function(callback) {
    if (typeof callback === "function") {
      return callback.length === 1 ? callback : (arg) => callback(arg);
    } else {
      throw new Error("Argument must be a function");
    }
  };
  var once = function(fn) {
    if (typeof fn === "function") {
      let done = false;
      return function(...args) {
        return done ? void 0 : (done = true, fn.apply(this, args));
      };
    } else {
      throw new Error("The element must be a function declaration");
    }
  };
  var take = function(value, elements) {
    let taked = [];
    let count = elements.length;
    if (typeof value === "number") {
      if (value > count || value === 0) {
        return elements;
      } else {
        for (let index = 0; index < value; index++) {
          taked.push(elements[index]);
        }
        return taked;
      }
    } else {
      throw new TypeError("Invalid arguments");
    }
  };
  var DefType = function(param) {
    while (param) {
      return typeof param;
    }
    return void 0;
  };
  var set = function(obj, propertyName, value) {
    if (typeof obj === "object") {
      for (var property in obj) {
        if (property === propertyName) {
          if (obj.hasOwnProperty(propertyName)) {
            obj[property] = value;
          }
        } else {
          obj[propertyName] = value;
        }
      }
    } else {
      throw new Error("Argument must be an object");
    }
  };

  // library/String.ts
  var UpperCase = function(string) {
    if (typeof string !== "string") {
      throw new Error("Argument must be a string ");
    }
    return string.toUpperCase();
  };
  var LowerCase = function(string) {
    if (typeof string !== "string") {
      throw new Error("Argument must be a string ");
    }
    return string.toLowerCase();
  };
  var CamelCase = function(string) {
    if (typeof string === "string") {
      return string.replace(
        /(?:^\w|[A-Z]|\b\w)/g,
        (word, index) => index === 0 ? LowerCase(word) : UpperCase(word)
      ).replace(/\s+/g, "");
    } else {
      throw new Error("Argument must be a string");
    }
  };
  var replaceAll = function(string, search, repl) {
    if (typeof string === "string" && typeof search === "string") {
      while (string.indexOf(search) !== -1)
        string = string.replace(search, repl);
      return string;
    } else {
      throw new Error(`${string} and ${search} must be a string`);
    }
  };
  var trim = function(text) {
    if (typeof text === "string") {
      return text.replace(/^\s+|\s+$/g, "");
    } else {
      throw new Error(`${text} must be a string`);
    }
  };
  var AccentToNoAccent = function(word) {
    if (typeof word === "string") {
      return word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    } else {
      throw new Error("Argument must be a string");
    }
  };
  var CountWords = function(string) {
    if (typeof string === "string") {
      const splitIntoSpaces = (str = string) => str.split(" ");
      const count = (array) => array.length;
      const compose = (a, b) => (c) => a(b(c));
      const CountWords2 = compose(count, splitIntoSpaces);
      return CountWords2(string);
    } else {
      throw new Error("Argument must be a string");
    }
  };
  var randomString = function(sequence, count, options) {
    options = options || {};
    let result = sequence.split("").slice(0, count);
    if (options.capitalize) {
      result = result.map((w) => {
        const word = `${UpperCase(w[0])} ${w.substring(1)}`;
        return word;
      });
      return result.join(" ");
    }
    return result;
  };

  // library/Array.ts
  var dim = function(dimension, initial) {
    if (typeof dimension === "number" && typeof initial === "number") {
      let a = new Array();
      for (let i = 0; i < dimension; i++) {
        a[i] = initial;
      }
      return a;
    } else {
      throw new Error("Invalid arguments");
    }
  };
  var LengthOf = function(element) {
    if (Array.isArray(element)) {
      return element.length;
    }
    throw new Error("Argument must be an array");
  };
  var withoutDuplicate = function(array) {
    let newArray = /* @__PURE__ */ new Set();
    if (Array.isArray(array)) {
      array.forEach((element) => newArray.add(element));
      return newArray;
    } else {
      throw new Error(`Argument ${array} must be an array`);
    }
  };
  var findSum = function(arr, weight) {
    let hastable = {};
    let len = LengthOf(arr);
    for (let i = 0; i < len; i++) {
      let currentEl = arr[i], difference2 = weight - currentEl;
      if (hastable[currentEl] !== void 0) {
        return [i, hastable[weight - currentEl]];
      } else {
        hastable[difference2] = i;
      }
    }
    return -1;
  };
  var beginAndEndOf = function(array, begin, end) {
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
    throw new Error("Argument must be an array");
  };
  var zip = function(arr1, arr2, callback) {
    if (typeof callback === "function") {
      if (arr1 && arr2 !== void 0) {
        let index, result = [];
        for (index = 0; index < Math.min(arr1.length, arr2.length); index++) {
          result.push(callback(arr1[index], arr2[index]));
        }
        return result;
      } else {
        throw new Error("Arguments must be an array");
      }
    } else {
      throw new Error("last argument must be an function expression");
    }
  };
  var maxValue = function(array) {
    if (Array.isArray(array)) {
      if (array.length < 0) {
        return array[0];
      } else {
        return Math.max(...array);
      }
    } else {
      throw new Error("Argument must be an Array");
    }
  };
  var minValue = function(array) {
    if (Array.isArray(array)) {
      if (array.length < 0) {
        return array[0];
      } else {
        return Math.min(...array);
      }
    } else {
      throw new Error("Argument must be an Array");
    }
  };
  var append = function(value, array) {
    var newArray = array;
    if (value !== void 0 && value !== null) {
      if (Array.isArray(array)) {
        newArray.push(value);
        return newArray;
      }
      throw new Error(`Argument must be an array`);
    } else {
      throw new Error("Wrong type for your value");
    }
  };
  var allEqual = function(array) {
    if (Array.isArray(array)) {
      if (LengthOf(array) <= 0) {
        return true;
      } else {
        return array.every((value) => value === array[0]);
      }
    } else {
      throw new Error("Argument must be an array");
    }
  };
  var difference = function(a, b) {
    if (Array.isArray(a) && Array.isArray(b)) {
      const s = new Set(b);
      return a.filter((x) => !s.has(x));
    } else {
      throw new Error("Arguments must be an array");
    }
  };
  var dropIf = function(arr, func) {
    if (Array.isArray(arr) && typeof func === "function") {
      while (LengthOf(arr) > 0 && !func(arr[0])) arr = arr.slice(1);
      return arr;
    }
    throw new Error("Invalid arguments");
  };
  var lastElement = function(array) {
    if (!Array.isArray(array) || LengthOf(array) === 0) throw new Error("Argument must be an array with values");
    else return array[LengthOf(array) - 1];
  };

  // library/Boolean.ts
  var isEmpty = function(value) {
    if (typeof value === "object") {
      if (value.length === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      throw new Error("Argument must be an array");
    }
  };
  var isNumeric = function(argument) {
    if (typeof argument === "number") {
      if (argument !== null && !isNaN(argument)) {
        return true;
      } else {
        return false;
      }
    } else {
      throw new Error("Argument must be a number");
    }
  };
  var isShortThan = function(string, value) {
    if (typeof string === "string") {
      if (string.length < value) {
        return true;
      } else if (string.length === value) {
        return null;
      } else {
        return false;
      }
    } else {
      throw new Error("Argument must be a string");
    }
  };

  // library/convert.ts
  var Floatify = function(value, position = 1) {
    if (typeof value === "number" && typeof position === "number" || typeof value === "string") {
      if (value === 0 && position > 0) {
        return value.toString();
      } else {
        return parseFloat(value.toString()).toFixed(position);
      }
    } else {
      throw new Error("Argument must be a Number or a String");
    }
  };
  var Clone = function(object) {
    if (typeof object === "object") {
      return JSON.parse(JSON.stringify(object));
    } else {
      throw new TypeError("Argument must be an object");
    }
  };

  // library/Math.ts
  var add = function(x, y) {
    if (x !== void 0 && y !== void 0) {
      if (typeof x === "number" && typeof y === "number") {
        if (x !== null && y !== null) {
          return x + y;
        } else {
          throw new Error("Argument must be different of null or undefined");
        }
      } else {
        throw new Error("Argument must be a number");
      }
    }
    throw new Error("Arguments must be provided");
  };
  var mult = function(x, y) {
    if (x !== void 0 && x !== null && y !== void 0 && y !== null) return x * y;
    else return 0;
  };
  var substract = function(x, y) {
    if (typeof x === "number" && typeof y === "number") {
      return x - y;
    } else {
      throw new Error("Arguments must a numbers");
    }
  };
  var odd = function(value) {
    if (typeof value === "number") {
      if (value !== 0) {
        return value % 2 == 1;
      } else {
        return 0;
      }
    } else {
      throw new Error("Argument must be a Number");
    }
  };
  var even = function(value) {
    if (typeof value === "number") {
      if (value === 0) {
        return value;
      } else {
        return !odd(value);
      }
    }
    throw new Error("Argument must be a number");
  };
  var matrix = function(m, n, initial) {
    let a, i, j, mat = [];
    for (i = 0; i < m; i++) {
      a = [];
      for (j = 0; j < n; j++) {
        a[j] = initial;
      }
      mat[i] = a;
    }
    return mat;
  };
  var euclidean = function(oringA, originB) {
    const a = Math.abs(oringA);
    const b = Math.abs(originB);
    if (typeof a === "number" && typeof b === "number") {
      if (a === 0 && b === 0) {
        return null;
      }
      if (a === 0 && b !== 0) {
        return b;
      }
      if (a !== 0 && b === 0) {
        return a;
      }
      if (a > b) {
        return euclidean(a % b, b);
      }
      return euclidean(b % a, a);
    }
    return null;
  };
  var square = function(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      if (a !== 0 && b !== 0) {
        let nbrS = 0, q = 1;
        while (q * q < a) q++;
        while (q * q <= b) {
          nbrS++;
          q++;
        }
        return nbrS;
      } else {
        throw new Error("Invalid argument");
      }
    } else {
      throw new Error("Arguments must be numbers");
    }
  };
  var EMC2 = function(mass) {
    const C = Number.parseFloat("2.99792458");
    let energyJoules = Number.parseFloat("0");
    let massKg = Number.parseFloat("0");
    if (mass) {
      massKg = Number.parseFloat(mass.toFixed(1));
      energyJoules = massKg * C * C;
      return {
        equation: "e = m * C^2...",
        masse: `m = ${massKg} kg`,
        "speed of light": `C = ${C} m/s`,
        energy: `${energyJoules} joules of energy!`
      };
    }
    return void 0;
  };
  var primes = function(num) {
    let state = num;
    let arr = Array.from({
      length: num - 1
    }).map((x, i) => i + 2), sqroot = Math.floor(Math.sqrt(state)), numTillSqrt = Array.from({
      length: sqroot - 1
    }).map((x, i) => i + 2);
    numTillSqrt.forEach(function(x) {
      return arr = arr.filter((y) => y % x !== 0 || y === x);
    });
    return arr;
  };

  // library/tests.ts
  function define(func) {
    if (typeof func === "function") {
      func();
    } else {
      throw new Error("wrong type on your arguments");
    }
  }
  var isEqualTo = function(abstractValue, initValue) {
    return initValue === abstractValue ? true : new Error(`Not equal : ${abstractValue} !== ${initValue}`);
  };

  // library/debugging.ts
  var loggerHelper = function(mode, initMessage, errorMessage, Nline) {
    if (mode === "DEBUG") {
      console.debug(`${initMessage} ${errorMessage} at line: ${Nline}`);
    } else if (mode === "ERROR") {
      console.error(`${initMessage} ${errorMessage} at line: ${Nline}`);
    } else if (mode === "WARN") {
      console.error(`${initMessage} ${errorMessage} at line: ${Nline}`);
    } else {
      throw new Error("Wrong mode for your debugging");
    }
  };
  var TimeOfRunning = function(fnc, name) {
    if (typeof fnc === "function" && typeof name === "string") {
      (function() {
        console.time(`${name}`);
        fnc();
        console.timeEnd(`${name}`);
      })();
    } else {
      throw new Error("Arguments errors");
    }
  };
  return __toCommonJS(bundle_exports);
})();
