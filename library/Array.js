/**
 * @param { number } dimension
 * @param { number } initial
 */
const dim = function(dimension, initial) {
    if(typeof dimension === "number" && typeof initial === "number") {
      let a = new Array();
      for(let i = 0; i < dimension; i++) {
        a[i] = initial;
      }
      return a;
    } else {
      throw new Error('Invalid arguments');
    }
}

/**
 * @param { array } element
 * @returns return the length of an element an params
 */
const LengthOf = function(element) {
  if(Array.isArray(element)) {
    if(typeof element === "object")  return element.length;
    if(element <= 0) return 0;
  } else {
    throw new Error('Argument must be an array');
  }
};

/**
 * @param { [number] } array
 */
const withoutDuplicate = function(array) {
    let newArray = new Set();
    if(Array.isArray(array)){
      array.forEach((element) => newArray.add(element))
      return newArray;
    } else {
      throw new Error(`Argument ${array} must be an array`);
    }
}

const findSum = function(arr, weight) {
    let hastable = {};
    let len = LengthOf(arr);
    for (let i = 0; i < len; i++) {
        let currentEl = arr[i],
            difference = weight - currentEl;
        if (hastable[currentEl] !== undefined)  {
          return [i, hastable[weight - currentEl]];
        } else {
          hastable[difference] = i;
        }
    }
    return -1;
}

const beginAndEndOf = function(array, begin , end) {
    while (Array.isArray(array)) {
        partArray = [];
        if(!begin && !end) {
            return array;
        }
        for(var i = begin; i < end; i++ ) {
            partArray.push(array[i]);
        }
        return partArray;
    }
}

const zip = function(arr1, arr2, callback) {
 if(typeof callback === 'function') {
  if(arr1 && arr2 !== undefined ) {
    let index, result = [];
    for(index = 0 ; index < Math.min(arr1.length , arr2.length); index++) {
      result.push(callback(arr1[index] , arr2[index]));
    }
    return result;
  } else {
    throw new Error('Arguments must be an array');
  }
 } else {
   throw new Error('last argument must be an function expression');
 }
}

/**
 * @param { [number] } array
 * @returns { number }
 * Retuern the value max inside an array
 */
const maxValue = function(array) {
  if(Array.isArray(array)) {
    if(array.length < 0) {
      return array;
    } else {
      return Math.max(...array);
    }
  } else {
    throw new Error('Argument must be an Array');
  }
}
/**
 * @param { [number] } array
 */
const minValue = function(array) {
  if(Array.isArray(array)) {
    if(array.length < 0) {
      return array;
    } else {
      return Math.min(...array);
    }
  } else {
    throw new Error('Argument must be an Array');
  }
}

/**
 * @param { string } value
 * @param { [number] } array
 * Returns a new list containing the contents of the given list,
 * followed by the given element.
 */
const append = function(value, array) {
  var newArray = array;
  if(value !== undefined && value !== null) {
    if(Array.isArray(array)) {
      newArray.push(value);
      return newArray;
    }
    throw new Error(`Argument must be an array`);
  } else {
    throw new Error('Wrong type for your value');
  }
}
/**
 * @param {[number]} array
 */
const allEqual = function(array) {
  if(Array.isArray(array)) {
    if(LengthOf(array) <= 0) {
      return array;
    } else {
      return array.every(value => value === array[0]);
    }
  } else {
    throw new Error('Argument must be an array');
  }
}

/**
 * @param { number } a
 * @param { number } b
 * @return return the difference between two arrays.
 */
const difference = function(a, b){
  if(Array.isArray(a) && Array.isArray(b)) {
    const s = new Set(b);
    return a.filter(x => !s.has(x));
  } else {
    throw new Error('Arguments must be an array');
  }
};


/**
 * @param { [number] } arr
 * @param { function } func
 * @returns removes elements from an array until
 *  the passed function returns true
 */
const dropIf = function(arr, func) {
  if(Array.isArray(arr) && typeof func === "function") {
    while(LengthOf(arr) > 0 && !func(arr[0])) arr = arr.slice(1);
    return arr;
  }
  throw new Error('Invalid arguments');
};

module.exports = {
  dim , LengthOf ,
  withoutDuplicate, beginAndEndOf,
  zip, minValue,
  maxValue, append,
  dropIf , allEqual
};
