// Dimensions
Array.dim = function(dimension, initial) {
    var a = [];
    for(var i = 0; i < dimension; i++) {
        a[i] = initial;
    }
    return a;
}

// return the length of an element an params
/**
 * @param { array } element
 */
Array.LengthOf = function(element) {
  if(Array.isArray(element)) {
    if(typeof element === "object")  return element.length;
    if(element <= 0) return 0;
  } else {
    return new Error('Argument must be an array');
  }
};

/**
 * @param { object } array
 */
Array.withoutDuplicate = function (array) {
    let newArray = new Set();
    if(this.isArray(array)){
      array.forEach((element) => newArray.add(element))
      return newArray;
    } else {
      return new Error(`Argument ${array} must be an array`);
    }
}

Array.findSum = function(arr, weight) {
    var hastable = {};
    var len = Array.LengthOf(arr); // lenght of the array
    console.log( `length of the array: ${len}`); // check state
    for (let i = 0; i < len; i++) {
        var currentEl = arr[i], // looping of all elements
            difference = weight - currentEl;
            console.log(currentEl); // range
            console.log(difference); // values not inside of the range between the weigth and the array
        if (hastable[currentEl] !== undefined)  {
            return [i, hastable[weight - currentEl]];
        } else {
            hastable[difference] = i;
        }
    }
    return -1;
}

Array.beginAndEndOf = function(array, begin , end) {
    while (array) {
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

Array.zip = function(arr1, arr2, callback) {
 if(typeof callback === 'function') {
  if(arr1 && arr2 !== undefined ) {
    let index, result = [];
    for(index = 0 ; index < Math.min(arr1.length , arr2.length); index++) {
      result.push(callback(arr1[index] , arr2[index]));
    }
    return result;
  } else {
    return new Error('Arguments must be an array');
  }
 } else {
   return new Error('last argument must be an function expression');
 }
}


// Array.oneDimension = function(array, callback) {
//   var newArray;
//   if(this.isArray(array)) {
//     return callback(newArray);
//   } else {
//     return new Error('Argument must be an array');
//   }
// }


const {
  dim, LengthOf,withoutDuplicate,
  beginAndEndOf, zip } = Array;

module.exports = {
  dim , LengthOf ,
  withoutDuplicate, beginAndEndOf,
  zip

};
