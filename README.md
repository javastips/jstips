![alt text](https://raw.githubusercontent.com/svngoku/JavasTips/master/js.gif)
 # JavasTips

 1.[What is JavasTips](#introduction)
   It's a library based on data stucture and problem solving algorithm in JavaScript .

2.[The purpose of JavasTips](#purpose)
   The purpose is to understand the big black box of data structure and how works different methods like `map(..) , each(...), filter(...), reduce(...) , find(...)`, and some tips .

# Installation

```bash
> npm i javastips --save
```

# Using library

* With nodeJs

```javascript
   let javastips = require("javastips");
   let { reverse } = javastips

   let array = [1, 3, 4, 5];

   reverse(array); // [5, 4, 3, 1]
```

* With es6 import

```javascript
   import { each } from "javastips";

   var array = [3, 2, 14, 6];

   each(array, (value) => console.log(value));  /* 3 2 14 6 */
```

## Options

### Regular tips

* *each* - implementation of the forEach function | *take a callback* .
* *map* - return a new array ,work like map in es6| *take a callback* .
* *filter* - filter an array | *take a callback* .
* *reduce* - reduce an array by one value .
* *find* - find an element and return true if finded or false .
* *reverse* - reverse an array or string and return it.
* *sort* - sort an array , object and return it .
* *by* - complement of sort function | *take a callback* .
* *linearSearch* - make a linear seach with an array .
* *.....* and more .

### String tips

* *LowerCase()* - Transform a string in LowerCase .
* *UpperCase()* - Transform a string in Upper case .
* *CamelCase()* - Transform a string in Camel case .
* *AccentToNoAccent()* - Take a string with accent as a param and return it without accent .

### Array tips

* *LengthOf()* - Return the lenght of an element | take *array* | return *number*.
* *withoutDuplicate()* - Return an array without duplicate number | *return an array* .

## Standard

EcmaScript 6