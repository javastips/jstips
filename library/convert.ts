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
export const Floatify = function(value: number | string, position: number = 1): string {
  if(typeof value === "number" && typeof position === "number" || typeof value === "string") {
    if(value === 0 && position > 0) {
      return value.toString();
    } else {
      return parseFloat(value.toString()).toFixed(position);
    }
  } else {
    throw new Error('Argument must be a Number or a String');
  }
}


export const Clone = function<T>(object: T): T {
  if(typeof object === "object") {
    return JSON.parse(JSON.stringify(object));
  } else {
    throw new TypeError('Argument must be an object');
  }
}