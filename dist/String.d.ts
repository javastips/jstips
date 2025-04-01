/**
 *
 * @param {string} string
 * @returns Convert a string in UpperCase
 */
export declare const UpperCase: (string: string) => string;
/**
 *
 * @param {string} string
 * @returns Convert a string in LowerCase
 */
export declare const LowerCase: (string: string) => string;
/**
 *
 * @param {string} string
 * @returns Convert a string in CamelCase
 */
export declare const CamelCase: (string: string) => string;
export declare const replaceAll: (string: string, search: string, repl: string) => string;
export declare const trim: (text: string) => string;
/**
 *
 * @param {string} word
 * @returns A string with accents removed
 */
export declare const AccentToNoAccent: (word: string) => string;
/**
 * @param {string} string
 * @returns {string}
 */
export declare const CountWords: (string: string) => number;
interface RandomStringOptions {
    capitalize?: boolean;
}
/**
 * @param {string} sequence
 * @param {number} count
 * @param {object} options
 */
export declare const randomString: (sequence: string, count: number, options?: RandomStringOptions) => string | string[];
export {};
