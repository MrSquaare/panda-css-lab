import { defineConfig } from "@pandacss/dev";
import preset from "@ui-kit/core";

export default defineConfig({
  preflight: true,
  presets: ["@pandacss/dev/presets", preset],
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  jsxFramework: "react", // Needed to let Panda CSS find components with known recipe names
  importMap: "@ui-kit/styled-system",
  outdir: "styled-system",
});
