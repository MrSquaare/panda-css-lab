import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@ui-kit/styled-system": resolve(__dirname, "./styled-system"), // Alias to the generated styled-system folder
    },
  },
});
