import { defineConfig, loadEnv } from "vite";
import { vanillaExtractPlugin as veVitePlugin } from "@vanilla-extract/vite-plugin";
import { vanillaExtractPlugin as veEsbuildPlugin } from "@vanilla-extract/esbuild-plugin";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    optimizeDeps: {
      esbuildOptions: {
        plugins: [veEsbuildPlugin({ runtime: true })],
      },
    },

    plugins: [
      tsconfigPaths(),
      veVitePlugin(),
      dts({
        insertTypesEntry: true,
      }),
    ],
    build: {
      lib: {
        entry: {
          index: resolve(__dirname, "src/index.ts"),
        },
        formats: ["es", "cjs"],
        fileName: (format, entryName) => {
          console.log("format: ", format);
          return `${entryName}.${format === "es" ? "mjs" : "cjs"}`;
        },
      },
    },
  };
});
