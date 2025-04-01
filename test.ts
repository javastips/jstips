import { add, UpperCase, LengthOf, BubbleSort } from './dist/javastips.js';

// Test add function
console.log('Testing add function:');
console.log(`2 + 3 = ${add(2, 3)}`);

// Test UpperCase function
console.log('\nTesting UpperCase function:');
console.log(`'hello' to uppercase: ${UpperCase('hello')}`);

// Test LengthOf function
console.log('\nTesting LengthOf function:');
console.log(`Length of [1, 2, 3, 4, 5]: ${LengthOf([1, 2, 3, 4, 5])}`);

// Test BubbleSort function
console.log('\nTesting BubbleSort function:');
const unsortedArray = [5, 3, 8, 1, 2, 9, 4, 7, 6];
console.log(`Unsorted array: ${unsortedArray}`);
console.log(`Sorted array: ${BubbleSort(unsortedArray)}`);