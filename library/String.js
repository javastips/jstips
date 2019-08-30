
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


// Replace word inside a string
const replaceAll = function(string, search, repl) {
	if(typeof string === "string" && typeof search === "string") {
		while(string.indexOf(search) !== -1)
		string = string.replace(search, repl);
		return string;
	} else {
		return new Error(`${string} and ${search} must be a string`);
	}
}

// Trim string
const trim = function(text) {
	if(typeof text === "string") {
		return text.replace(/^\s+|\s+$/g,"");
	} else {
		return new Error(`${text} must be a string`);
	}
}

// Retrieve accent 
const AccentToNoAccent = function(word) {
	if(typeof word === "string" ) {
		let norm = new Array('À','Á','Â','Ã','Ä','Å','Æ','Ç','È','É','Ê','Ë',
		'Ì','Í','Î','Ï', 'Ð','Ñ','Ò','Ó','Ô','Õ','Ö','Ø','Ù','Ú','Û','Ü','Ý',
		'Þ','ß', 'à','á','â','ã','ä','å','æ','ç','è','é','ê','ë','ì','í','î',
		'ï','ð','ñ', 'ò','ó','ô','õ','ö','ø','ù','ú','û','ü','ý','ý','þ','ÿ');
		
		let spec = new Array('A','A','A','A','A','A','A','C','E','E','E','E',
			'I','I','I','I', 'D','N','O','O','O','0','O','O','U','U','U','U','Y',
			'b','s', 'a','a','a','a','a','a','a','c','e','e','e','e','i','i','i',
			'i','d','n', 'o','o','o','o','o','o','u','u','u','u','y','y','b','y');
		
		for(var i = 0; i < spec.length; i++) {
			word = replaceAll(word, norm[i], spec[i]);
		}

		return word;
	} else {
		return new Error('Argument must be a string');
	}
	
}


