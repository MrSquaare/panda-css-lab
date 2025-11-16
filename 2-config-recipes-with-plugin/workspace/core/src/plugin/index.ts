import { definePlugin } from "@pandacss/dev";
import type { PandaPlugin } from "@pandacss/types";
import { existsSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { cwd } from "node:process";
import packageJSON from "./package.json";

let outDir: string;

export default definePlugin({
  name: "@ui-kit/core",
  hooks: {
    "config:resolved": ({ config }) => {
      outDir = config.outdir;

      return config;
    },
    "codegen:done": () => {
      if (!outDir) {
        console.warn(
          `⚠️ \`codegen:done\`: outDir is not defined. Skipping package.json creation for @ui-kit/styled-system`,
        );

        return;
      }

      const styledSystemPath = resolve(cwd(), outDir);

      if (!existsSync(styledSystemPath)) {
        console.warn(
          `⚠️ \`codegen:done\`: outDir path \`${styledSystemPath}\` does not exist. Skipping package.json creation for @ui-kit/styled-system`,
        );

        return;
      }

      const packageJsonPath = resolve(styledSystemPath, "package.json");

      writeFileSync(packageJsonPath, packageJSON);

      console.log(
        `✔️ \`${outDir}/package.json\`: package.json declaration for @ui-kit/styled-system`,
      );
    },
  },
}) satisfies PandaPlugin;
