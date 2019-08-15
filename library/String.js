// Tips with strings

// return a text in UpperCase
const UpperCase = function (string) {
    if(typeof string !== "string") return new Error('Argument must be a string ');
    else return string.toUpperCase();
}

// return a string in LowerCase
const LowerCase = function(string) {
    if(typeof string !== "string") return new Error('Argument must be a string ');
    else return string.toLowerCase();
}

// return  a string with CamelCase
const CamelCase = function(string) {
    // _distingString = string.split(',');
    // if(typeof _distingString[0] === "string") {
    //     UpperCase(_distingString[0][0])
    // }

    // console.log(_distingString);
    // return ;
}

    