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
    if(typeof string === "string") {
        return string.replace(/(?:^\w|[A-Z]|\b\w)/g, 
            (word, index) => index === 0 ? LowerCase(word) : UpperCase(word)
        ).replace(/\s+/g,'');
    } else {
        return new Error('Argument must be a string');
    }    
}

