/**
 * @param {array}
 * @return boolean
 * @function isEmpty
 */
export const isEmpty = function(value: any[]): boolean {
  if(typeof value === 'object') {
    if(value.length === 0) {
      return true
    } else {
      return false
    }
  } else {
    throw new Error('Argument must be an array');
  }
}

/**
 * @param {number} argument
 * @returns { boolean }
 */
export const isNumeric = function(argument: number): boolean {
  if(typeof argument === 'number') {
    if(argument !== null && !isNaN(argument)) {
      return true
    } else {
      return false;
    }
  } else {
    throw new Error('Argument must be a number');
  }
}

/**
 *
 * @param {string} string
 * @param {number} value
 * @returns { boolean | Error | null }
 */
export const isShortThan = function(string: string, value: number): boolean | null {
  if(typeof string === 'string') {
    if(string.length < value ) {
      return true;
    } else if(string.length === value) {
      return null;
    } else {
      return false;
    }
  } else {
    throw new Error("Argument must be a string");
  }
}