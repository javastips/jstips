/**
 * @param { number } dimension
 * @param { number } initial
 */
export const dim = function(dimension: number, initial: number): number[] {
    if(typeof dimension === "number" && typeof initial === "number") {
      let a: number[] = new Array();
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
export const LengthOf = function(element: any[]): number {
  if(Array.isArray(element)) {
    return element.length;
  } 
  throw new Error('Argument must be an array');
};

/**
 * @param { [number] } array
 */
export const withoutDuplicate = function<T>(array: T[]): Set<T> {
    let newArray = new Set<T>();
    if(Array.isArray(array)){
      array.forEach((element) => newArray.add(element))
      return newArray;
    } else {
      throw new Error(`Argument ${array} must be an array`);
    }
}

export const findSum = function(arr: number[], weight: number): number[] | number {
    let hastable: Record<number, number> = {};
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

export const beginAndEndOf = function<T>(array: T[], begin: number, end: number): T[] {
    if (Array.isArray(array)) {
        let partArray: T[] = [];
        if(!begin && !end) {
            return array;
        }
        for(var i = begin; i < end; i++ ) {
            partArray.push(array[i]);
        }
        return partArray;
    }
    throw new Error('Argument must be an array');
}

export const zip = function<T, U, R>(arr1: T[], arr2: U[], callback: (a: T, b: U) => R): R[] {
 if(typeof callback === 'function') {
  if(arr1 && arr2 !== undefined ) {
    let index: number, result: R[] = [];
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
export const maxValue = function(array: number[]): number {
  if(Array.isArray(array)) {
    if(array.length < 0) {
      return array[0];
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
export const minValue = function(array: number[]): number {
  if(Array.isArray(array)) {
    if(array.length < 0) {
      return array[0];
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
export const append = function<T>(value: T, array: T[]): T[] {
  var newArray = array;
  if(value !== undefined && value !== null) {
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
export const allEqual = function<T>(array: T[]): boolean {
  if(Array.isArray(array)) {
    if(LengthOf(array) <= 0) {
      return true;
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
export const difference = function<T>(a: T[], b: T[]): T[] {
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
export const dropIf = function<T>(arr: T[], func: (item: T) => boolean): T[] {
  if(Array.isArray(arr) && typeof func === "function") {
    while(LengthOf(arr) > 0 && !func(arr[0])) arr = arr.slice(1);
    return arr;
  }
  throw new Error('Invalid arguments');
};

/**
 *
 * @param {[number]} array
 * @returns Return the last element of an array
 */
export const lastElement = function<T>(array: T[]): T {
  if(!Array.isArray(array) || LengthOf(array) === 0 ) throw new Error("Argument must be an array with values");
  else return array[LengthOf(array) - 1];
}