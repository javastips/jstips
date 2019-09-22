"use strict";

const library = {}

// each function , implementation of forEach .
library.each = function(list, callback) {
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

// map function , implementation of map .
library.map = function(list, callback) {
   var storage = [];
   library.each(list, function(v,i, list) {
      storage.push(callback(v, i, list));
   });
   return storage;
};

// filter array
library.filter = function(array, callback) {
  var store = [];
  library.each(array, function(item, i, list) {
    if(callback(item, i,list)) store.push(item);
  });
  return store;
}

// second implementation of reduce with es6 syntax
library.easyReduce = function (array, combine, start) {
  let current = start;
  for(let element of array) {
    current = combine(current, element);
  }
  return current;
}

/**
 * @param { object } list
 * @param { function } callback
 * @param { number } intiValue
 * @function implementation of reduce function
 * @return number
 *
 */
library.reduce = function(list, callback , initialValue){
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
    return new Error('Argument must be an array');
  }

}


// find function , help us to ifn a value, inside an array , an object or an string
/**
 * @param { number | string } value
 * @param { number | string  } inside
 * @return  boolean
 */
library.find = function(value, inside) {
    var finded;
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
    console.log(finded)
}


/**
 * @param { object } element
 * function to sort values inside an array
 * this function doesn't work like sort function used in es6
 * this implementatio as inspired from bubble sort .
*/
library.sort = function (element) {
    // length of the array
    var len = element.length;
    // the swap function change the position of elements
    // by verifiying if index1 < than index2 from the array
    function swap(array, index1, index2) {
      var temp = array[index1];
      array[index1] = array[index2];
      array[index2] = temp;
    }
    // looping the array and compare values
    for(var i = 0; i < len; i++) {
      for(var j = 0; j <= i; j++ ) {
        if(element[i] < element[j]) {
          swap(element, i, j);
        }
      }
    }
    // return []
    return element;
};

// La fonction by prend une string comme argument et
// renvoie une fonction de comparaison qui peut etre utilisée pour trier
// un tableau d'objets contenant cet argument

library.by = function(element) {
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
      return new Error(`Exepected an object when sorting by ${element}`);
    }
  };
}

// Simple linear search implementation
library.linearSearch = function (array, number) {
  var size = array.length, position = 0;
  if(Array.isArray(array)) {
    for(var i = 0; i < size; i++) {
      if(array[i] == number) {
       position = array[i] - 1;
        console.log(`L'élément ce situe à la position ${position} du tableau .`);
        return ;
      }
    }
    console.log(false);
  }
  else {
    console.log('Wrong type ! , you need an array');
  }

};

// function reversing element's
library.reverse =  function(character){
  var reversed = [], len = character.length;
  for(var i = len - 1; i >= 0; i--) {
    reversed.push(character[i]);
  }
  // return  the new element reversed
  return reversed;
}

// utils functions
library.not = function(fn) {
  return function negated(...args) {
    return !fn(...args);
  };
}

// Convert function , create a getter and setter for an object
library.convert = function(obj) {
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
    return new Error(`Object ${obj} must be a object type`)
  }
}

library.unary = function(callback) {
  if(typeof callback === 'function') {
    callback.length === 1 ? callback : (arg) => callback(arg);
  } else {
    return new Error('Argument must be a function');
  }
}

// once function execute once something
library.once = function(fn) {
  if(typeof fn === 'function') {
    let done = false;
    return function() {
      return done ? undefined : ((done = true), fn.apply(this, arguments));
    }
  } else {
    return new Error('The element must be a function declaration');
  }
}

library.take = function(value, elements) {
  let taked = Array();
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
    return new TypeError('Invalid arguments');
  }
}
console.log(library.take(0, 'ramda'))

// Destructuring of tips object
const {
  each , map , reduce , easyReduce, find ,
  filter , reverse , sort, by , not,  linearSearch , convert , once, unary
}  = library;

// export modules
module.exports = {
  each , map , reduce, easyReduce , find ,
  filter, reverse , sort , by, not ,linearSearch,
  convert , once , unary
};

