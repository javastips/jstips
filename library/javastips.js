"use strict";

const library = {}

// each function , implementation of forEach .
library.each = function(list, callback) {
  // list : array, callback: function
  if(Array.isArray(list)) {
    // loop through array
    for(var i = 0; i < list.length; i++){
      // Call the callback with a list item
      callback(list[i], i, list);
    }
  } else {
    // loop through object
    for(var key in list) {
      //call the callback with list items
        callback(list[key], key, list);
    }
  }
};

// map function , implementation of map .
library.map = function(list, callback) {
    // create an empty array to store
   var storage = [];
   library.each(list, function(v,i, list) {
      storage.push(callback(v, i, list));
   });
   // return []
   return storage;
};

// filter array
library.filter = function(array, callback) {
  // create a new array
  var store = [];
  // loop through the array
  library.each(array, function(item, i, list) {
    // check if callback return true
    if(callback(item, i,list)) store.push(item);
  });
  //return array
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

// hard implementation of reduce
library.reduce = function(list, callback , initialValue){
  let memo = initialValue;
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
}


// find function , help us to ifn a value, inside an array , an object or an string
library.find = function(value, inside) {
    var finded;
    // if inside it's an array
    if(Array.isArray(inside)) {
      // we loop it with the eaxh method
      var looping = this.each(inside, (v) => {
        // we compared them
        if(v === value) {
          finded = true;
        } else {
          finded = false;
        }
      });
    }
    // if the type of iniside is an object
    else if(typeof inside === "object") {
      // we check the value with Object.values methods
      var values = Object.values(inside);
      // we loop through the values
      for( let v of values) {
        // and if values as similair with the value params
        if(Object.is(v, value)) {
          // we find him
          finded = true;
        }
        finded = false;
      }

    }
    // if the type of iniside is a string
    else if( typeof inside === "string") {
      // we check if the is gratter than the value
      if(inside.length <= value) {
        // we log an error
        console.error("Cannot find the value , string so short");
      } else {
        // else we split the sentence inside an array
        var classifier = inside.split(' ')
        // filter the sentence by cacthing the great value
            .filter(v => v === value);
        // and if this two value macth we initialise finded to true
        if(classifier == value) finded = true;
        // else to false
        else finded = false;
      }
    }
    console.log(finded)
}


/*
 * function to sort values inside an array
 * this function doesn't work like sort function used in es6
 * this implementatio as inspired from bubble sort .
 *
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

library.by = function(name) {
  return function(o,p) {
    var a , b;
    if(typeof o === 'object' && typeof p === 'object' && o && p) {
      a = o[name] ; b = p[name];
      if(a === b) { return 0 }
      if(typeof a === typeof b) {
        return a < b ? -1 : 1;
      }
      return typeof a < typeof b ? -1 : 1;
    } else {
      return new Error(`Exepected an object when sorting by ${name}`);
    }
  };
}

// Simple linear search implementation
library.linearSearch = function (array, number) {
  // size of array
  var size = array.length, position = 0;
  //check if the array it's really an array
  if(Array.isArray(array)) {
    // if an array , loop the array
    for(var i = 0; i < size; i++) {
      // check if the number is present in the array
      if(array[i] == number) {
        // show true and the position in the array
       position = array[i] - 1;
        console.log(`L'élément ce situe à la position ${position} du tableau .`);
        return ;
      }
    }
    // if is not present show false;
    console.log(false);
  } // if not an array show error message
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

const unary = function(callback) {
  if(typeof callback === 'function') {
    callback.length === 1 ? callback : (arg) => callback(arg);
  } else {
    return new Error('Argument must be a function');
  }
}

// once function execute once something
const once = function(fn) {
  if(typeof fn === 'function') {
    let done = false;
    return function() {
      return done ? undefined : ((done = true), fn.apply(this, arguments));
    }
  } else {
    return new Error('The element must be a function declaration');
  }
}

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

