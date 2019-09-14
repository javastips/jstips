const _tips = require('./javastips');
const _string = require('./String');
const _array = require('./Array');
const _boolean = require('./Boolean');

const {
  each , map , reduce, easyReduce , find ,
  filter, reverse , sort , by, not ,linearSearch,
  convert , once , unary
} = _tips

const {
  UpperCase,
  CamelCase,
  LowerCase,
  AccentToNoAccent,
  replaceAll,
  CountWords,
  randomString
} = _string


const {
  dim , LengthOf ,
  withoutDuplicate, beginAndEndOf,
  zip
} = _array


const {
  isShortThan,
  isNumeric,
  isEmpty
} = _boolean



module.exports = {
  each ,
  map ,
  reduce,
  easyReduce ,
  find ,
  filter,
  reverse ,
  sort ,
  by,
  not ,
  linearSearch,
  convert ,
  once ,
  unary,
  UpperCase,
  CamelCase,
  LowerCase,
  AccentToNoAccent,
  replaceAll,
  CountWords,
  randomString,
  dim ,
  LengthOf ,
  withoutDuplicate, 
  beginAndEndOf,
  zip,
  isShortThan,
  isNumeric,
  isEmpty
}


