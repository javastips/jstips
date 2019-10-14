/**
 * @param {array}
 * @return boolean
 * @function isEmpty
 */
const isEmpty = function(value) {
  if(typeof value === 'object') {
    if(value.length === 0) {
      return true
    } else {
      return false
    }
  } else {
    return new Error('Argument must be an array');
  }
}

/**
 * @param {number} argument
 * @returns { boolean }
 */
const isNumeric = function(argument) {
  if(typeof argument === 'number') {
    if(argument !== null && argument !== isNaN) {
      return true
    } else {
      return false;
    }
  } else {
    return new Error('Argument must be a number');
  }
}

/**
 *
 * @param {string} string
 * @param {number} value
 * @returns { boolean | Error | null }
 */
const isShortThan = function(string, value) {
  if(typeof string === 'string') {
    if(string.length < value ) {
      return true;
    } else if(string.length === value) {
      return null;
    } else {
      return false;
    }
  } else {
    return new Error("Argument must be a string");
  }
}


module.exports = {
  isShortThan,
  isNumeric,
  isEmpty
}
