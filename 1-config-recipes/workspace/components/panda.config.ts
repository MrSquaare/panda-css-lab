import { defineConfig } from "@pandacss/dev";
import preset from "@ui-kit/core";

export default defineConfig({
  presets: [preset],
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  importMap: "@ui-kit/styled-system",
  outdir: "styled-system",
});
