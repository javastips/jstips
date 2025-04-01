type LoggerMode = "DEBUG" | "ERROR" | "WARN";
/**
 * @param {string} mode
 * @param {string} initMessage
 * @param {string} errorMessage
 * @param {number} Nline
 * @returns {string}
 * Define logger's messages
 */
export declare const loggerHelper: (mode: LoggerMode, initMessage: string, errorMessage: string, Nline: number) => void;
/**
 * @param { function } fnc
 * @param {string} name
 */
export declare const TimeOfRunning: (fnc: () => void, name: string) => void;
export {};
