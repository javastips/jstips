# JavasTips TypeScript Refactoring

This is a TypeScript refactoring of the JavasTips library. The original JavaScript code has been converted to TypeScript to provide type safety and better developer experience.

## Changes Made

1. Converted all JavaScript files to TypeScript with proper type annotations
2. Updated build system (webpack and rollup) to handle TypeScript
3. Added TypeScript configuration (tsconfig.json)
4. Generated type declaration files (.d.ts)
5. Updated package.json to include TypeScript-related scripts and dependencies

## How to Use

### Installation

```bash
# Install dependencies
npm install
```

### Building

```bash
# Build with rollup (generates dist/javastips.js)
npm run build

# Build with webpack (generates build/javastips.bundle.js)
export NODE_OPTIONS=--openssl-legacy-provider && npm run webpack
```

### Using in a Browser

```html
<!DOCTYPE html>
<html>
<head>
    <script src="dist/javastips.js"></script>
    <script>
        // Use the library
        const result = javastips.add(2, 3);
        console.log(result); // 5
    </script>
</head>
<body>
</body>
</html>
```

### Using in a TypeScript Project

```typescript
// Import specific functions
import { add, UpperCase, LengthOf } from './dist/javastips';

// Use the functions
const sum = add(2, 3);
const upper = UpperCase('hello');
const length = LengthOf([1, 2, 3, 4, 5]);
```

## Available Functions

The library provides various utility functions organized in different modules:

- **Array**: `LengthOf`, `allEqual`, `append`, `beginAndEndOf`, `difference`, `dim`, `dropIf`, `findSum`, `lastElement`, `maxValue`, `minValue`, `withoutDuplicate`, `zip`
- **Boolean**: `isEmpty`, `isNumeric`, `isShortThan`
- **String**: `AccentToNoAccent`, `CamelCase`, `CountWords`, `LowerCase`, `UpperCase`, `randomString`, `replaceAll`, `trim`
- **Math**: `EMC2`, `add`, `euclidean`, `even`, `matrix`, `mult`, `odd`, `square`, `substract`, `primes`
- **Algorithms**: `BoyerMoreHorspool`, `getFibonacciSequence`, `BubbleSort`
- **Utilities**: `DefType`, `by`, `convert`, `each`, `easyReduce`, `filter`, `find`, `linearSearch`, `map`, `not`, `once`, `reduce`, `reverse`, `set`, `sort`, `take`, `unary`

## Type Definitions

Type definitions are available in the `dist` directory as `.d.ts` files, providing autocompletion and type checking when using the library in TypeScript projects.