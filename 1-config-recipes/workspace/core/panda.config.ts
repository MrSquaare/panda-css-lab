import { defineConfig } from "@pandacss/dev";
import preset from "./src/index";

export default defineConfig({
  preflight: true,
  presets: ["@pandacss/dev/presets", preset],
  staticCss: {
    recipes: "*",
  },
});
