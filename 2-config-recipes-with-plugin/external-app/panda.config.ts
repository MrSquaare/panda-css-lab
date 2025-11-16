import { defineConfig } from "@pandacss/dev";
import preset from "@ui-kit/core";
import plugin from "@ui-kit/core/plugin";

export default defineConfig({
  preflight: true,
  presets: ["@pandacss/dev/presets", preset],
  plugins: [plugin],
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  jsxFramework: "react", // Needed to let Panda CSS find components with known recipe names
  importMap: "@ui-kit/styled-system",
  outdir: "styled-system",
});
