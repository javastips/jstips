"use strict";

/**
 * @param { [number]} list
 * @param { function } callback
 * Iterate over an input list, calling a provided function fn for each element in the list.
 */
const each = function(list, callback) {
  if(Array.isArray(list)) {
    for(var i = 0; i < list.length; i++){
      callback(list[i], i, list);
    }
  } else {
    for(var key in list) {
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
const map = function(list, callback) {
   var storage = [];
    each(list, function(v,i, list) {
      storage.push(callback(v, i, list));
   });
   return storage;
};

// filter array
const filter = function(array, callback) {
  var store = [];
  each(array, function(item, i, list) {
    if(callback(item, i,list)) store.push(item);
  });
  return store;
}

/**
 * @param { [ number ]} array
 * @param { function } combine
 * @param { number } start
 * @returns
 * Returns a single item by iterating through the list,
 * successively calling the iterator function and passing
 * it an accumulator value and the current value from the array,
 * and then passing the result to the next call.
 */
const easyReduce = function (array, combine, start) {
  let current = start;
  for(let element of array) {
    current = combine(current, element);
  }
  return current;
}

/**
 * @param { [number] } list
 * @param { function } callback
 * @param { number } intiValue
 * @function implementation of reduce function
 * @return number
 *
 */
const reduce = function(list, callback , initialValue){
  let memo = initialValue;
  if(Array.isArray(list)) {
    for( var i = 0; i < list.length; i++) {
      if(i === 0 && memo === undefined)  {
        memo += list[0] ;
        i++;
      } else {
        memo = callback(list[i], memo)
      }
      callback(list[i], memo)
    }
    return memo;
  } else {
    throw new Error('Argument must be an array');
  }

}


// find function , help us to ifn a value, inside an array , an object or an string
/**
 * @param { number | string } value
 * @param { number | string  } inside
 * @return  boolean
 */
const find = function(value, inside) {
    let finded = null;
    if(Array.isArray(inside)) {
      var looping = this.each(inside, (v) => {
        if(v === value) {
          finded = true;
        } else {
          finded = false;
        }
      });
    }
    else if(typeof inside === "object") {
      var values = Object.values(inside);
      for( let v of values) {
        if(Object.is(v, value)) {
          finded = true;
        }
        finded = false;
      }
    }
    else if( typeof inside === "string") {
      if(inside.length <= value) {
        console.error("Cannot find the value , string so short");
      } else {
        var classifier = inside.split(' ')
            .filter(v => v === value);
        if(classifier == value) finded = true;
        else finded = false;
      }
    }
  return finded;
}


/**
 * @param { [number] } array
 * function to sort values inside an array
 * this function doesn't work like sort function used in es6
 * this implementatio as inspired from bubble sort .
*/
const sort = function(array) {
  let len = array.length;
  if(!len) {
    return ;
  }
  if(Array.isArray(array)) {
    function swap(array, index1, index2) {
      let temp = array[index1];
      array[index1] = array[index2]
      array[index2] = temp;
    }
    for (let i = 0; i < len; i++) {
      for (let j = 0; j <= i; j++) {
        if(array[i] < array[j]) {
          swap(array, i,j);
        }
      }
    }
    return array;
  } else {
    throw new Error("Argument must be an array");
  }
}



/**
 * @param { string } element
 * @returns
 * La fonction by prend une string comme argument et
 *  renvoie une fonction de comparaison qui peut etre utilisée pour trier
 * un tableau d'objets contenant cet argument
 *
 * Par : Douglas Crofford.
 */
const by = function(element) {
  return function(o,p) {
    var a , b;
    if(typeof o === 'object' && typeof p === 'object' && o && p) {
      a = o[element] ; b = p[element];
      if(a === b) { return 0 }
      if(typeof a === typeof b) {
        return a < b ? -1 : 1;
      }
      return typeof a < typeof b ? -1 : 1;
    } else {
      throw new Error(`Exepected an object when sorting by ${element}`);
    }
  };
}

// Simple linear search implementation
/**
 * @param { [number] } array
 * @param { number } number
 */
const linearSearch = function (array, number) {
  var size = array.length, position = 0;
  if(Array.isArray(array)) {
    for(var i = 0; i < size; i++) {
      if(array[i] == number) {
       position = array[i] - 1;
        console.log(`Position: ${position} .`);
        return ;
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
const reverse =  function(character){
  let reversed = [], len = character.length;
  for(var i = len - 1; i >= 0; i--) {
    reversed.push(character[i]);
  }
  return reversed;
}

/**
 * @param { function } fn
 * @returns { function } A function that returns the negation of a  function.
 */
const not = function(fn) {
  if(typeof fn === "function") {
    return function negated(...args) {
      return !fn(...args);
    };
  }
  throw new Error("Argument must be an function");
}

/**
 * @param { object } obj
 * @returns
 * Take an object and convert it by assign a get and set
 * to this object
 */
const convert = function(obj) {
  if(typeof obj === 'object') {
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
      })
    })
  } else {
    throw new Error(`Object ${obj} must be a object type`);
  }
}

/**
 * @param { function } callback
 * @returns { function }
 * Wraps a function of any arity
 * (including nullary) in a function that accepts exactly 1 parameter.
 * Any extraneous parameters will not be passed to the supplied function.
 */
const unary = function(callback) {
  if(typeof callback === 'function') {
    callback.length === 1 ? callback : (arg) => callback(arg);
  } else {
    throw new Error('Argument must be a function');
  }
}

/**
 * @param { function } fn
 * @returns { string | boolean }
 * Accepts a function fn and returns a function that guards
 * invocation of fn such that fn can only ever be called once,
 * no matter how many times the returned function is invoked.
 */
const once = function(fn) {
  if(typeof fn === 'function') {
    let done = false;
    return function() {
      return done ? undefined : ((done = true), fn.apply(this, arguments));
    }
  } else {
    throw new Error('The element must be a function declaration');
  }
}

/**
 * @param { number | string  } value
 * @param { [number] | [string] } elements
 * @returns {[number]}
 * Returns the first n elements of the given list, string,
 * (or object with a take method)
 */
const take = function(value, elements) {
  let taked = [];
  let count = elements.length;
  if(typeof value === "number") {
    if(value > count || value === 0) {
      return elements;
    } else {
      for (let index = 0; index < value; index++) {
        taked.push(elements[index]);
      }
      return taked;
    }
  } else {
    throw new TypeError('Invalid arguments');
  }
}

/**
 * @returns
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'.
 * Does not attempt to distinguish user Object types any further,
 * reporting them all as 'Object'.
 */
const DefType = function(param) {
  while(param) {
    return typeof param;
  }
  return ;
}

/**
 * @param { Object  } obj
 * @param { String } propertyName
 * @param { String } value
 * @returns { void } Take an object has a first argument and set the selected value
 * or added a value with a prop.
 */
const set = function(obj, propertyName, value) {
  if(typeof obj === "object") {
    for (var property in obj) {
      if(property === propertyName){
        if (obj.hasOwnProperty(propertyName) ) {
          obj[property] = value;
        }
      } else {
        obj[propertyName] = value;
      }
    }
  } else {
    throw new Error("Argument must be an object");
  }

}

// export modules
module.exports = {
  each , map , reduce, easyReduce , find ,
  filter, reverse , sort , by, not ,linearSearch,
  convert , once , unary,take, DefType, set
};

