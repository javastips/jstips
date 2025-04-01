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
export const BoyerMoreHorspool = function(needle: string, haystack: string): number {
  let skip = 0; // init position
  const preprocess = function preprocess(word: string): Record<string, number> {
    const table: Record<string, number> = {};
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
    skip += (baseTable[haystack[skip + needle.length - 1]] || needle.length);
  }
  return -1;
}

/**
 * @param {number} length
 */
export const getFibonacciSequence = function(length: number): number[] {
  var n: number, ref: Generator<number, void, unknown>, results: number[];
  results = [1];

  const fibonacci = function*(): Generator<number, void, unknown> {
    var current: number, previous: number;
    [previous, current] = [1, 1];
    while (true) {
      [previous, current] = [current, previous + current];
      yield current;
    }
  };

  ref = fibonacci();
  for (n of ref) {
    results.push(n);
    if (results.length === length) {
      break;
    }
  }
  return results;
};


/**
 *
 * @param {[number]} array
 */
export const BubbleSort = function<T>(array: T[]): T[] | undefined {
  let arrayLength = array.length;
  if(!arrayLength) {
    return;
  }
  if(Array.isArray(array)) {
    const swap = (array: T[], index1: number, index2: number): void => {
      let temp = array[index1];
      array[index1] = array[index2];
      array[index2] = temp;
    };
    
    for (let i = 0; i < arrayLength; i++) {
      for (let j = 0; j <= i; j++) {
        if(array[i] < array[j]) {
          swap(array, i, j);
        }
      }
    }
    return array;
  } else {
    throw new Error("Argument must be an array");
  }
}