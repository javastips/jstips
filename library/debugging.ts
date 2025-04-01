type LoggerMode = "DEBUG" | "ERROR" | "WARN";

/**
 * @param {string} mode
 * @param {string} initMessage
 * @param {string} errorMessage
 * @param {number} Nline
 * @returns {string}
 * Define logger's messages
 */
export const loggerHelper = function(mode: LoggerMode, initMessage: string, errorMessage: string, Nline: number): void {
  if(mode === "DEBUG") {
    console.debug(`${initMessage} ${errorMessage} at line: ${Nline}`);
  } else if(mode === "ERROR") {
    console.error(`${initMessage} ${errorMessage} at line: ${Nline}`);
  } else if(mode === "WARN") {
    console.error(`${initMessage} ${errorMessage} at line: ${Nline}`);
  } else {
    throw new Error('Wrong mode for your debugging');
  }
}

/**
 * @param { function } fnc
 * @param {string} name
 */
export const TimeOfRunning = function(fnc: () => void, name: string): void {
  if(typeof fnc === "function" && typeof name === "string") {
    (function() {
      console.time(`${name}`);
      fnc();
      console.timeEnd(`${name}`);
    })();
  } else {
    throw new Error('Arguments errors');
  }
}