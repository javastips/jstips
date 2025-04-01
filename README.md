![JavasTips](https://raw.githubusercontent.com/svngoku/JavasTips/master/js.gif)

# JavasTips

A TypeScript library for data structures, algorithms, and functional programming utilities.

## What is JavasTips?

JavasTips is a utility library based on data structures and problem-solving algorithms, now fully implemented in TypeScript. It provides type-safe implementations of common functional programming patterns and utility functions.

## Why JavasTips?

JavasTips makes your development easier by:
- Providing type safety with TypeScript
- Offering a comprehensive set of utility functions
- Implementing common algorithms and data structure operations
- Simplifying functional programming patterns

## Installation

```bash
npm install javastips --save
```

## Usage

### With TypeScript

```typescript
import { reverse, each, add, UpperCase } from "javastips";

// Array operations
const array = [1, 3, 4, 5];
const reversed = reverse(array); // [5, 4, 3, 1]

// Iteration
each([3, 2, 14, 6], (value) => console.log(value)); // 3 2 14 6

// Math operations
const sum = add(5, 3); // 8

// String operations
const uppercased = UpperCase("hello"); // "HELLO"
```

### With JavaScript (Browser)

```html
<script src="dist/javastips.js"></script>
<script>
  // Use the library
  const reversed = javastips.reverse([1, 2, 3, 4]);
  console.log(reversed); // [4, 3, 2, 1]
  
  const sum = javastips.add(5, 3);
  console.log(sum); // 8
</script>
```

## Available Functions

### Functional Programming Utilities

| Function | Description |
|----------|-------------|
| `each` | Iterates over a list, calling a provided function for each element |
| `map` | Creates a new array with the results of calling a function on every element |
| `filter` | Creates a new array with elements that pass a test |
| `reduce` | Reduces an array to a single value |
| `easyReduce` | Simplified version of reduce |
| `find` | Finds an element in an array or object |
| `sort` | Sorts an array or object |
| `by` | Complement of sort function for complex sorting |
| `linearSearch` | Performs a linear search on an array |
| `not` | Returns the negation of a function |
| `once` | Creates a function that can only be called once |
| `unary` | Creates a function that accepts exactly one parameter |

### String Operations

| Function | Description |
|----------|-------------|
| `LowerCase` | Transforms a string to lowercase |
| `UpperCase` | Transforms a string to uppercase |
| `CamelCase` | Transforms a string to camel case |
| `AccentToNoAccent` | Removes accents from a string |
| `replaceAll` | Replaces all occurrences of a substring |
| `trim` | Removes whitespace from both ends of a string |
| `CountWords` | Counts the number of words in a string |
| `randomString` | Generates a random string |

### Array Operations

| Function | Description |
|----------|-------------|
| `LengthOf` | Returns the length of an array |
| `withoutDuplicate` | Returns an array without duplicate elements |
| `beginAndEndOf` | Returns values at the beginning and end of an array |
| `zip` | Combines elements from multiple arrays |
| `maxValue` | Returns the maximum value in an array |
| `minValue` | Returns the minimum value in an array |
| `allEqual` | Checks if all elements in an array are equal |
| `difference` | Returns the difference between two arrays |
| `lastElement` | Returns the last element of an array |

### Math Operations

| Function | Description |
|----------|-------------|
| `add` | Adds two numbers |
| `mult` | Multiplies two numbers |
| `substract` | Subtracts one number from another |
| `odd` | Checks if a number is odd |
| `even` | Checks if a number is even |
| `matrix` | Creates a matrix with specified dimensions |
| `euclidean` | Calculates the Euclidean algorithm |
| `square` | Performs square-related calculations |
| `EMC2` | Calculates energy using E=mc² |
| `primes` | Generates prime numbers up to a given number |

### Algorithms

| Function | Description |
|----------|-------------|
| `BoyerMoreHorspool` | Implements the Boyer-Moore-Horspool string search algorithm |
| `getFibonacciSequence` | Generates a Fibonacci sequence |
| `BubbleSort` | Implements the bubble sort algorithm |

## Building from Source

```bash
# Install dependencies
npm install

# Build with rollup (generates dist/javastips.js)
npm run build

# Build with webpack (generates build/javastips.bundle.js)
export NODE_OPTIONS=--openssl-legacy-provider && npm run webpack

# Type checking
npm run type-check
```

## License

MIT
