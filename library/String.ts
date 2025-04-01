/**
 *
 * @param {string} string
 * @returns Convert a string in UpperCase
 */
export const UpperCase = function (string: string): string {
  if(typeof string !== "string") {
    throw new Error('Argument must be a string ');
  }
  return string.toUpperCase();
}

/**
 *
 * @param {string} string
 * @returns Convert a string in LowerCase
 */
export const LowerCase = function(string: string): string {
    if(typeof string !== "string") {
     throw new Error('Argument must be a string ');
    }
    return string.toLowerCase();
}

/**
 *
 * @param {string} string
 * @returns Convert a string in CamelCase
 */
export const CamelCase = function(string: string): string {
    if(typeof string === "string") {
        return string.replace(/(?:^\w|[A-Z]|\b\w)/g,
            (word, index) => index === 0 ? LowerCase(word) : UpperCase(word)
        ).replace(/\s+/g,'');
    } else {
        throw new Error('Argument must be a string');
    }
}


// Replace word inside a string
export const replaceAll = function(string: string, search: string, repl: string): string {
        if(typeof string === "string" && typeof search === "string") {
                while(string.indexOf(search) !== -1)
                string = string.replace(search, repl);
                return string;
        } else {
                throw new Error(`${string} and ${search} must be a string`);
        }
}

// Trim string
export const trim = function(text: string): string {
        if(typeof text === "string") {
                return text.replace(/^\s+|\s+$/g,"");
        } else {
                throw new Error(`${text} must be a string`);
        }
}

/**
 *
 * @param {string} word
 * @returns A string with accents removed
 */
export const AccentToNoAccent = function(word: string): string {
        if(typeof word === "string") {
                // Use a simpler implementation that handles common accents
                return word.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        } else {
                throw new Error('Argument must be a string');
        }
}

/**
 * @param {string} string
 * @returns {string}
 */
export const CountWords = function(string: string): number {
  if(typeof string === 'string') {
    const splitIntoSpaces = (str: string = string) => str.split(" ");
    const count = (array: string[]) => array.length;
    const compose = <T, U, V>(a: (x: U) => V, b: (x: T) => U) => (c: T): V => a(b(c));
    const CountWords = compose(count, splitIntoSpaces);
    return CountWords(string);
  } else {
    throw new Error('Argument must be a string');
  }
}

interface RandomStringOptions {
  capitalize?: boolean;
}

/**
 * @param {string} sequence
 * @param {number} count
 * @param {object} options
 */
export const randomString = function(sequence: string, count: number, options?: RandomStringOptions): string | string[] {
  options = options || {};
  let result = sequence.split('').slice(0, count);
  if(options.capitalize) {
    result = result.map((w) => {
      const word = `${UpperCase(w[0])} ${w.substring(1)}`;
      return word;
    });
    return result.join(' ');
  }
  return result;
}