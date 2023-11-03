import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "lib1",
      fileName: "lib1",
      formats: ["es", "umd", "cjs"],
    },
    sourcemap: true,
    minify: false,
  },
  plugins: [
    process.env.NO_TYPES?.toLowerCase() === "true"
      ? null
      : dts({
          rollupTypes: true,
        }),
  ].filter((a) => !!a),
  test: {
    setupFiles: ["./__tests__/setup.ts"],
  },
});
