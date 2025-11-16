import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/plugin/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  external: ["@pandacss/dev", "@pandacss/types"],
});
