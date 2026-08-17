import assert from "node:assert/strict";
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

test(
  "webpack 5 + esbuild-loader builds a working bundle",
  { timeout: 120000 },
  () => {
    execSync("npm run webpack --silent", { cwd: root, stdio: "pipe" });
    const bundlePath = path.join(root, "build", "javastips.bundle.js");
    assert.ok(fs.existsSync(bundlePath), "webpack bundle should exist");
    // ponytail: webpack dev mode uses eval() per module, so the IIFE global
    // is only proven in the dist build; here we smoke-check the file parses.
    new vm.Script(fs.readFileSync(bundlePath, "utf8"));
  }
);

test("type-check is wired to a strict no-emit tsc", { timeout: 120000 }, () => {
  const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
  assert.equal(pkg.scripts["type-check"], "tsc --noEmit");
  const tsconfig = JSON.parse(fs.readFileSync(path.join(root, "tsconfig.json"), "utf8"));
  assert.equal(tsconfig.compilerOptions.strict, true);
  execSync("npm run type-check --silent", { cwd: root, stdio: "pipe" });
});
