import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      tsconfigPaths(),
      dts({
        insertTypesEntry: true,
      }),
    ],
    css: {
      postcss: {
        plugins: [
          tailwindcss(), // Changed this line to call tailwindcss as a function
          autoprefixer(), // Also call autoprefixer as a function
          cssnano({
            preset: [
              "default",
              {
                discardComments: { removeAll: true },
              },
            ],
          }),
        ],
      },
    },
    build: {
      lib: {
        entry: resolve(__dirname, "src/index.ts"),
        formats: ["es", "cjs"],
        fileName: (format) => `index.${format === "es" ? "mjs" : "cjs"}`,
      },
      rollupOptions: {
        external: ["tailwind-variants"],
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.name?.endsWith(".css")) return "styles.css";
            return assetInfo.name ?? "[name][extname]";
          },
        },
      },
    },
  };
});
