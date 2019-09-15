/**
 * @param { number | string} value
 * @param { number } position
 */
const Floatify = function(value, position = 1) {
  if(typeof value === "number" && typeof position === "number" || typeof value === "string") {
    if(value === 0 && position > 0) {
      return value;
    } else {
      return parseFloat(value).toFixed(position)
    }
  } else {
    return new Error('Argument must be a Number or a String');
  }
}


module.exports = { Floatify }
