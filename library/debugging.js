// tools for debugging code
/**
 * @param {string} mode
 * @param {string} initMessage
 * @param {string} errorMessage
 * @param {number} Nline
 * @returns {string}
 */
const loggerHelper = function(mode,initMessage, errorMessage, Nline) {
  if(mode === "DEBUG") {
    console.debug(`${initMessage} ${errorMessage} at line: ${Nline}`);
  } else if(mode === "ERROR") {
    console.error(`${initMessage} ${errorMessage} at line: ${Nline}`);
  } else if(mode === "WARN") {
    console.error(`${initMessage} ${errorMessage} at line: ${Nline}`);
  } else {
    return new Error('Wrong mode for your debugging');
  }
}



