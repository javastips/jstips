![alt text](https://raw.githubusercontent.com/svngoku/JavasTips/master/js.gif)

# JavasTips

 1.[What is JavasTips](#introduction)
   It's a library based on data stucture and problem solving algorithm in JavaScript .

2.[The purpose of JavasTips](#purpose)
   The purpose is to understand the big black box of data structure and how works different methods like `map(..) , each(...), filter(...), reduce(...) , find(...)`, and some tips .

# Installation

```bash
> npm i javastips
```

# Using library

* With nodeJs

```javascript
   let javastips = require("javastips");

   let array = [1, 3, 4, 5];

   javastips.reverse(array); // [5, 4, 3, 1]
```

* With es6 import

```javascript
   import { each } from "javastips";

   var array = [3, 2, 14, 6];

   each(array, (value) => {
      console.log(value)
   })
```

## Options

* *each* - implementation of the forEach function
* *map* - return a new array ,work like map of es6
* *filter* - filter an array and take a callback
* *reduce* - 
* *find* - 
* *reverse* - 
* *sort* -
* *by* -
* *linearSearch* - 
* *find* - 
* *.....* and more .

## Standard

EcmaScript 6