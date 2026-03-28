import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

let cachedBundle;

export function loadBundle() {
  if (cachedBundle) return cachedBundle;

  const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
  const bundlePath = path.resolve(currentDirectory, "../dist/javastips.js");
  const source = fs.readFileSync(bundlePath, "utf8");
  const context = { console };

  vm.createContext(context);
  vm.runInContext(source, context);

  cachedBundle = context.javastips;
  return cachedBundle;
}
