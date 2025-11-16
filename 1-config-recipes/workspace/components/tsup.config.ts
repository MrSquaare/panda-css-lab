import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  external: ["@pandacss/dev", "react", "react-dom", "@ui-kit/core"],
});
