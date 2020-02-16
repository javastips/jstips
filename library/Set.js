/**
 * @param {Set} SetA
 * @param {Set} SetB
 * @returns create a set that contains those elements of set a that are also in set b.
 */
const intersetSet = function(SetA,SetB){
  if(typeof SetA === "object" && typeof SetB === "object") {
    let intersection =  new Set([...SetA].filter(x => SetB.has(x)));
    return intersection;
  } else {
    throw new Error('Argument must be a Sets');
  }
}


module.exports = {
  intersetSet
}
