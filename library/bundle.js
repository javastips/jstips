const _algorithm = require('./algorithem');
const _tips = require('./javastips');
const _string = require('./String');
const _array = require('./Array');
const _boolean = require('./Boolean');
const _convertion = require('./convert');


const {
  each , map , reduce, easyReduce , find ,
  filter, reverse , sort , by, not ,linearSearch,
  convert , once , unary, take, DefType, set
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

const { Floatify } = _convertion


const { BoyerMooreHorspool } = _algorithm


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
  isEmpty,
  Floatify,
  BoyerMooreHorspool,
  take,
  DefType,
  set,
};


