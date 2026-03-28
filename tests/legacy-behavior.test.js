import assert from "node:assert/strict";
import test from "node:test";
import { loadBundle } from "./load-bundle.js";

const javastips = loadBundle();

test("string helpers preserve their legacy transformations", () => {
  assert.equal(javastips.CamelCase("hello world"), "helloWorld");
  assert.equal(javastips.trim("  hello  "), "hello");
  assert.equal(javastips.replaceAll("a-b-a", "a", "x"), "x-b-x");
  assert.equal(javastips.CountWords("one two three"), 3);
});

test("array helpers preserve their current return shapes", () => {
  assert.deepEqual(javastips.filter([1, 2, 3, 4], (value) => value % 2 === 0), [2, 4]);
  assert.deepEqual(javastips.sort([2, 1, 3, 5, 3]), [1, 2, 3, 3, 5]);
  assert.deepEqual(javastips.difference([1, 2, 3], [2, 4]), [1, 3]);

  const unique = javastips.withoutDuplicate([1, 1, 2, 2, 3]);
  assert.deepEqual(Array.from(unique), [1, 2, 3]);
});

test("algorithm helpers remain reachable through the bundle entry", () => {
  assert.equal(javastips.BoyerMoreHorspool("jeremy", "bonjour jeremy , tu vas bien ? "), 8);
  assert.deepEqual(javastips.getFibonacciSequence(6), [1, 2, 3, 5, 8, 13]);
  assert.deepEqual(javastips.BubbleSort([9, 3, 7, 1]), [1, 3, 7, 9]);
});
