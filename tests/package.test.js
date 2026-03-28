import assert from "node:assert/strict";
import test from "node:test";
import { loadBundle } from "./load-bundle.js";

const javastips = loadBundle();

test("bundle entry exposes the helper surface", () => {
  [
    "each",
    "map",
    "reduce",
    "reverse",
    "CamelCase",
    "LengthOf",
    "add",
    "BubbleSort",
    "define",
    "loggerHelper",
  ].forEach((key) => {
    assert.equal(typeof javastips[key], "function", `${key} should be exported`);
  });
});

test("core helpers still behave like the documented examples", () => {
  assert.deepEqual(javastips.reverse([1, 3, 4, 5]), [5, 4, 3, 1]);
  assert.equal(javastips.reduce([1, 2, 3, 4], (value, sum) => value + sum, 0), 10);
  assert.deepEqual(javastips.map([1, 2, 3], (value) => value + 1), [2, 3, 4]);
});
test("domain helpers are reachable through the bundle entry", () => {
  assert.equal(javastips.CamelCase("hello world"), "helloWorld");
  assert.equal(javastips.LengthOf([1, 2, 3]), 3);
  assert.equal(javastips.add(2, 3), 5);
  assert.deepEqual(javastips.BubbleSort([3, 1, 2]), [1, 2, 3]);
});
