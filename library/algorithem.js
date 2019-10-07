/**
 * const t = "bonjour jeremy , tu vas bien ? "
 * const s = "jeremy";
 * console.time("moore");
 * console.log(BoyerMooreHorspool(s,t));
 * console.timeEnd('moore');
 * @param {string } needle
 * @param {string } haystack
 * @returns { number } position
 * The BoyerMooreHorspool it's a algorithm
 * for searching with a time of complexity of O(n)2
 */
const BoyerMooreHorspool = function(needle, haystack) {
  let skip = 0; // init position
  const preprocess = function preprocess(word) {
    const table = {};
    for(let i = 0 ; i < word.length - 1;i++ ) {
      table[word[i]] = word.length - i - 1;
    }
    return table;
  }
  const baseTable = preprocess(needle);

  while(haystack.length - skip >= needle.length) {
    let i = needle.length - 1;
    while (haystack[skip + i] === needle[i]) {
      if(i === 0) {
        return skip;
      }
      i--;
    }
    skip += (baseTable[haystack[skip + needle.length - 1]] || needle.length);
  }
  return -1;
}



module.exports = {
  BoyerMooreHorspool
}
