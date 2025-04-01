/**
 * @param {Set} SetA
 * @param {Set} SetB
 * @returns create a set that contains those elements of set a that are also in set b.
 */
export const intersetSet = function<T>(SetA: Set<T>, SetB: Set<T>): Set<T> {
  if(SetA instanceof Set && SetB instanceof Set) {
    let intersection = new Set([...SetA].filter(x => SetB.has(x)));
    return intersection;
  } else {
    throw new Error('Argument must be a Sets');
  }
}