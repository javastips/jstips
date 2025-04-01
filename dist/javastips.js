var javastips = (function (exports) {
  'use strict';

  /**
   * const t = "bonjour jeremy , tu vas bien ? "
   * const s = "jeremy";
   * console.time("moore");
   * console.log(BoyerMooreHorspool(s,t));
   * console.timeEnd('moore');
   * @param {string } needle
   * @param {string } haystack
   * @returns { number } position
   * The BoyerMooreHorspool it's a algorithm
   * for searching with a time of complexity of O(n)2
   */
  const BoyerMoreHorspool = function (needle, haystack) {
      let skip = 0; // init position
      const preprocess = function preprocess(word) {
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
          skip += (baseTable[haystack[skip + needle.length - 1]] || needle.length);
      }
      return -1;
  };
  /**
   * @param {number} length
   */
  const getFibonacciSequence = function (length) {
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
  /**
   *
   * @param {[number]} array
   */
  const BubbleSort = function (array) {
      let arrayLength = array.length;
      if (!arrayLength) {
          return;
      }
      if (Array.isArray(array)) {
          const swap = (array, index1, index2) => {
              let temp = array[index1];
              array[index1] = array[index2];
              array[index2] = temp;
          };
          for (let i = 0; i < arrayLength; i++) {
              for (let j = 0; j <= i; j++) {
                  if (array[i] < array[j]) {
                      swap(array, i, j);
                  }
              }
          }
          return array;
      }
      else {
          throw new Error("Argument must be an array");
      }
  };

  /**
   * @param { [number]} list
   * @param { function } callback
   * Iterate over an input list, calling a provided function fn for each element in the list.
   */
  const each = function (list, callback) {
      if (Array.isArray(list)) {
          for (var i = 0; i < list.length; i++) {
              callback(list[i], i, list);
          }
      }
      else {
          for (var key in list) {
              callback(list[key], key, list);
          }
      }
  };
  /**
    * @param { [number]} list
    * @param { function } callback
    * @returns Takes a function and a functor,
    * applies the function to each of the functor's values,
    * and returns a functor of the same shape.
   */
  const map = function (list, callback) {
      var storage = [];
      each(list, function (v, i, list) {
          storage.push(callback(v, i, list));
      });
      return storage;
  };
  // filter array
  const filter = function (array, callback) {
      var store = [];
      each(array, function (item, i, list) {
          if (callback(item, i, list))
              store.push(item);
      });
      return store;
  };
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
  const easyReduce = function (array, combine, start) {
      let current = start;
      for (let element of array) {
          current = combine(current, element);
      }
      return current;
  };
  /**
   * @param { [number] } list
   * @param { function } callback
   * @param { number } intiValue
   * @function implementation of reduce function
   * @return number
   *
   */
  const reduce = function (list, callback, initialValue) {
      let memo = initialValue;
      if (Array.isArray(list)) {
          for (var i = 0; i < list.length; i++) {
              if (i === 0 && memo === undefined) {
                  memo = list[0];
                  i++;
              }
              else {
                  memo = callback(list[i], memo);
              }
              callback(list[i], memo);
          }
          return memo;
      }
      else {
          throw new Error('Argument must be an array');
      }
  };
  // find function , help us to ifn a value, inside an array , an object or an string
  /**
   * @param { number | string } value
   * @param { number | string  } inside
   * @return  boolean
   */
  const find = function (value, inside) {
      let finded = null;
      if (Array.isArray(inside)) {
          each(inside, (v) => {
              if (v === value) {
                  finded = true;
              }
              else {
                  finded = false;
              }
          });
      }
      else if (typeof inside === "object") {
          var values = Object.values(inside);
          for (let v of values) {
              if (Object.is(v, value)) {
                  finded = true;
              }
              finded = false;
          }
      }
      else if (typeof inside === "string") {
          if (inside.length <= value) {
              console.error("Cannot find the value , string so short");
          }
          else {
              var classifier = inside.split(' ')
                  .filter(v => v === value);
              if (classifier == value)
                  finded = true;
              else
                  finded = false;
          }
      }
      return finded;
  };
  /**
   * @param { [number] } array
   * function to sort values inside an array
   * this function doesn't work like sort function used in es6
   * this implementatio as inspired from bubble sort .
  */
  const sort = function (array) {
      let len = array.length;
      if (!len) {
          return array;
      }
      if (Array.isArray(array)) {
          const swap = (array, index1, index2) => {
              let temp = array[index1];
              array[index1] = array[index2];
              array[index2] = temp;
          };
          for (let i = 0; i < len; i++) {
              for (let j = 0; j <= i; j++) {
                  if (array[i] < array[j]) {
                      swap(array, i, j);
                  }
              }
          }
          return array;
      }
      else {
          throw new Error("Argument must be an array");
      }
  };
  /**
   * @param { string } element
   * @returns
   * La fonction by prend une string comme argument et
   *  renvoie une fonction de comparaison qui peut etre utilisée pour trier
   * un tableau d'objets contenant cet argument
   *
   * Par : Douglas Crofford.
   */
  const by = function (element) {
      return function (o, p) {
          var a, b;
          if (typeof o === 'object' && typeof p === 'object' && o && p) {
              a = o[element];
              b = p[element];
              if (a === b) {
                  return 0;
              }
              if (typeof a === typeof b) {
                  return a < b ? -1 : 1;
              }
              return typeof a < typeof b ? -1 : 1;
          }
          else {
              throw new Error(`Expected an object when sorting by ${element}`);
          }
      };
  };
  // Simple linear search implementation
  /**
   * @param { [number] } array
   * @param { number } number
   */
  const linearSearch = function (array, number) {
      var size = array.length, position = 0;
      if (Array.isArray(array)) {
          for (var i = 0; i < size; i++) {
              if (array[i] == number) {
                  position = array[i] - 1;
                  console.log(`Position: ${position} .`);
                  return;
              }
          }
          return false;
      }
      else {
          throw new Error('Wrong type ! , you need an array');
      }
  };
  /**
   * @param { string | [number] } character
   * @returns { object } reversed
   */
  const reverse = function (character) {
      let reversed = [], len = character.length;
      for (var i = len - 1; i >= 0; i--) {
          reversed.push(character[i]);
      }
      return reversed;
  };
  /**
   * @param { function } fn
   * @returns { function } A function that returns the negation of a  function.
   */
  const not = function (fn) {
      if (typeof fn === "function") {
          return function negated(...args) {
              return !fn(...args);
          };
      }
      throw new Error("Argument must be an function");
  };
  /**
   * @param { object } obj
   * @returns
   * Take an object and convert it by assign a get and set
   * to this object
   */
  const convert = function (obj) {
      if (typeof obj === 'object') {
          Object.keys(obj).forEach(key => {
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
      }
      else {
          throw new Error(`Object ${obj} must be a object type`);
      }
  };
  /**
   * @param { function } callback
   * @returns { function }
   * Wraps a function of any arity
   * (including nullary) in a function that accepts exactly 1 parameter.
   * Any extraneous parameters will not be passed to the supplied function.
   */
  const unary = function (callback) {
      if (typeof callback === 'function') {
          return callback.length === 1 ? callback : (arg) => callback(arg);
      }
      else {
          throw new Error('Argument must be a function');
      }
  };
  /**
   * @param { function } fn
   * @returns { string | boolean }
   * Accepts a function fn and returns a function that guards
   * invocation of fn such that fn can only ever be called once,
   * no matter how many times the returned function is invoked.
   */
  const once = function (fn) {
      if (typeof fn === 'function') {
          let done = false;
          return function (...args) {
              return done ? undefined : ((done = true), fn.apply(this, args));
          };
      }
      else {
          throw new Error('The element must be a function declaration');
      }
  };
  /**
   * @param { number | string  } value
   * @param { [number] | [string] } elements
   * @returns {[number]}
   * Returns the first n elements of the given list, string,
   * (or object with a take method)
   */
  const take = function (value, elements) {
      let taked = [];
      let count = elements.length;
      if (typeof value === "number") {
          if (value > count || value === 0) {
              return elements;
          }
          else {
              for (let index = 0; index < value; index++) {
                  taked.push(elements[index]);
              }
              return taked;
          }
      }
      else {
          throw new TypeError('Invalid arguments');
      }
  };
  /**
   * @returns
   * Gives a single-word string description of the (native) type of a value,
   * returning such answers as 'Object', 'Number', 'Array', or 'Null'.
   * Does not attempt to distinguish user Object types any further,
   * reporting them all as 'Object'.
   */
  const DefType = function (param) {
      while (param) {
          return typeof param;
      }
      return undefined;
  };
  /**
   * @param { Object  } obj
   * @param { String } propertyName
   * @param { String } value
   * @returns { void } Take an object has a first argument and set the selected value
   * or added a value with a prop.
   */
  const set = function (obj, propertyName, value) {
      if (typeof obj === "object") {
          for (var property in obj) {
              if (property === propertyName) {
                  if (obj.hasOwnProperty(propertyName)) {
                      obj[property] = value;
                  }
              }
              else {
                  obj[propertyName] = value;
              }
          }
      }
      else {
          throw new Error("Argument must be an object");
      }
  };

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
  /**
   *
   * @param {string} string
   * @returns Convert a string in CamelCase
   */
  const CamelCase = function (string) {
      if (typeof string === "string") {
          return string.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index === 0 ? LowerCase(word) : UpperCase(word)).replace(/\s+/g, '');
      }
      else {
          throw new Error('Argument must be a string');
      }
  };
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
  // Trim string
  const trim = function (text) {
      if (typeof text === "string") {
          return text.replace(/^\s+|\s+$/g, "");
      }
      else {
          throw new Error(`${text} must be a string`);
      }
  };
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
              const word = `${UpperCase(w[0])} ${w.substring(1)}`;
              return word;
          });
          return result.join(' ');
      }
      return result;
  };

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
  const findSum = function (arr, weight) {
      let hastable = {};
      let len = LengthOf(arr);
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
  /**
   * @param {[number]} array
   */
  const allEqual = function (array) {
      if (Array.isArray(array)) {
          if (LengthOf(array) <= 0) {
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
  /**
   * @param { [number] } arr
   * @param { function } func
   * @returns removes elements from an array until
   *  the passed function returns true
   */
  const dropIf = function (arr, func) {
      if (Array.isArray(arr) && typeof func === "function") {
          while (LengthOf(arr) > 0 && !func(arr[0]))
              arr = arr.slice(1);
          return arr;
      }
      throw new Error('Invalid arguments');
  };
  /**
   *
   * @param {[number]} array
   * @returns Return the last element of an array
   */
  const lastElement = function (array) {
      if (!Array.isArray(array) || LengthOf(array) === 0)
          throw new Error("Argument must be an array with values");
      else
          return array[LengthOf(array) - 1];
  };

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

  /**
   * @param { number | string} value
   * @param { number } position
   * @returns { number }
   * The functon take a value and a position ,
   * by default the postion is equal to 1,
   * and parse the value to float.
   * The position is the statement of the number of 0 before
   * the value

   */
  const Floatify = function (value, position = 1) {
      if (typeof value === "number" && typeof position === "number" || typeof value === "string") {
          if (value === 0 && position > 0) {
              return value.toString();
          }
          else {
              return parseFloat(value.toString()).toFixed(position);
          }
      }
      else {
          throw new Error('Argument must be a Number or a String');
      }
  };
  const Clone = function (object) {
      if (typeof object === "object") {
          return JSON.parse(JSON.stringify(object));
      }
      else {
          throw new TypeError('Argument must be an object');
      }
  };

  /**
   * @param { number } x
   * @param { number } y
   * Addition deux valeurs
   */
  const add = function (x, y) {
      if (x !== undefined && y !== undefined) {
          if (typeof x === "number" && typeof y === "number") {
              if (x !== null && y !== null) {
                  return x + y;
              }
              else {
                  throw new Error('Argument must be different of null or undefined');
              }
          }
          else {
              throw new Error('Argument must be a number');
          }
      }
      throw new Error('Arguments must be provided');
  };
  /**
   * @param { number } x
   * @param { number } y
   * @returns Make a multiplication operation
   */
  const mult = function (x, y) {
      if (x !== undefined && x !== null && y !== undefined && y !== null)
          return x * y;
      else
          return 0;
  };
  /**
   * @param { number } x
   * @param { number } y
   * Soustrait deux valeurs
   */
  const substract = function (x, y) {
      if (typeof x === "number" && typeof y === "number") {
          return x - y;
      }
      else {
          throw new Error('Arguments must a numbers');
      }
  };
  /**
   * @param { number } value
   */
  const odd = function (value) {
      if (typeof value === "number") {
          if (value !== 0) {
              return value % 2 == 1;
          }
          else {
              return 0;
          }
      }
      else {
          throw new Error('Argument must be a Number');
      }
  };
  /**
   * @param { number } value
   */
  const even = function (value) {
      if (typeof value === 'number') {
          if (value === 0) {
              return value;
          }
          else {
              return !odd(value);
          }
      }
      throw new Error('Argument must be a number');
  };
  /**
   *
   * @param {number} m
   * @param {number} n
   * @param {number} initial
   * @returns Return numbers formated on matrix
   */
  const matrix = function (m, n, initial) {
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
  /**
   * @param {number} originalA
   * @param {number} originalB
   * @returns The eucludian value of  numbers
   */
  const euclidean = function (oringA, originB) {
      const a = Math.abs(oringA);
      const b = Math.abs(originB);
      if (typeof a === 'number' && typeof b === 'number') {
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
  /**
   * @param { number } a
   * @param { number } b
   * @return { number }
   */
  const square = function (a, b) {
      if (typeof a === "number" && typeof b === "number") {
          if (a !== 0 && b !== 0) {
              let nbrS = 0, q = 1;
              while (q * q < a)
                  q++;
              while (q * q <= b) {
                  nbrS++;
                  q++;
              }
              return nbrS;
          }
          else {
              throw new Error("Invalid argument");
          }
      }
      else {
          throw new Error('Arguments must be numbers');
      }
  };
  /**
   * @param {number} mass
   * @argument C speed of the light
   * @returns Calculate how much energy they could
   * get if they transformed their mass.
   */
  const EMC2 = function (mass) {
      const C = Number.parseFloat('2.99792458');
      let energyJoules = Number.parseFloat('0');
      let massKg = Number.parseFloat('0');
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
      return undefined;
  };
  /**
   *
   * @param {number} num
   * @returns Generates primes up to a given number, using the Sieve of Eratosthenes.
   */
  const primes = function (num) {
      let state = num;
      let arr = Array.from({
          length: num - 1
      }).map((x, i) => i + 2), sqroot = Math.floor(Math.sqrt(state)), numTillSqrt = Array.from({
          length: sqroot - 1
      }).map((x, i) => i + 2);
      numTillSqrt.forEach(function (x) {
          return arr = arr.filter(y => y % x !== 0 || y === x);
      });
      return arr;
  };

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

  /**
   * @param {string} mode
   * @param {string} initMessage
   * @param {string} errorMessage
   * @param {number} Nline
   * @returns {string}
   * Define logger's messages
   */
  const loggerHelper = function (mode, initMessage, errorMessage, Nline) {
      if (mode === "DEBUG") {
          console.debug(`${initMessage} ${errorMessage} at line: ${Nline}`);
      }
      else if (mode === "ERROR") {
          console.error(`${initMessage} ${errorMessage} at line: ${Nline}`);
      }
      else if (mode === "WARN") {
          console.error(`${initMessage} ${errorMessage} at line: ${Nline}`);
      }
      else {
          throw new Error('Wrong mode for your debugging');
      }
  };
  /**
   * @param { function } fnc
   * @param {string} name
   */
  const TimeOfRunning = function (fnc, name) {
      if (typeof fnc === "function" && typeof name === "string") {
          (function () {
              console.time(`${name}`);
              fnc();
              console.timeEnd(`${name}`);
          })();
      }
      else {
          throw new Error('Arguments errors');
      }
  };

  exports.AccentToNoAccent = AccentToNoAccent;
  exports.BoyerMoreHorspool = BoyerMoreHorspool;
  exports.BubbleSort = BubbleSort;
  exports.CamelCase = CamelCase;
  exports.Clone = Clone;
  exports.CountWords = CountWords;
  exports.DefType = DefType;
  exports.EMC2 = EMC2;
  exports.Floatify = Floatify;
  exports.LengthOf = LengthOf;
  exports.LowerCase = LowerCase;
  exports.TimeOfRunning = TimeOfRunning;
  exports.UpperCase = UpperCase;
  exports.add = add;
  exports.allEqual = allEqual;
  exports.append = append;
  exports.beginAndEndOf = beginAndEndOf;
  exports.by = by;
  exports.convert = convert;
  exports.define = define;
  exports.difference = difference;
  exports.dim = dim;
  exports.dropIf = dropIf;
  exports.each = each;
  exports.easyReduce = easyReduce;
  exports.euclidean = euclidean;
  exports.even = even;
  exports.filter = filter;
  exports.find = find;
  exports.findSum = findSum;
  exports.getFibonacciSequence = getFibonacciSequence;
  exports.isEmpty = isEmpty;
  exports.isEqualTo = isEqualTo;
  exports.isNumeric = isNumeric;
  exports.isShortThan = isShortThan;
  exports.lastElement = lastElement;
  exports.linearSearch = linearSearch;
  exports.loggerHelper = loggerHelper;
  exports.map = map;
  exports.matrix = matrix;
  exports.maxValue = maxValue;
  exports.minValue = minValue;
  exports.mult = mult;
  exports.not = not;
  exports.odd = odd;
  exports.once = once;
  exports.primes = primes;
  exports.randomString = randomString;
  exports.reduce = reduce;
  exports.replaceAll = replaceAll;
  exports.reverse = reverse;
  exports.set = set;
  exports.sort = sort;
  exports.square = square;
  exports.substract = substract;
  exports.take = take;
  exports.trim = trim;
  exports.unary = unary;
  exports.withoutDuplicate = withoutDuplicate;
  exports.zip = zip;

  return exports;

})({});
