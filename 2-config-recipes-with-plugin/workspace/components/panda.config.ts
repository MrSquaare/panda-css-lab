import { defineConfig } from "@pandacss/dev";
import preset from "@ui-kit/core";
import plugin from "@ui-kit/core/plugin";

export default defineConfig({
  presets: [preset],
  plugins: [plugin],
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  importMap: "@ui-kit/styled-system",
  outdir: "styled-system",
});
