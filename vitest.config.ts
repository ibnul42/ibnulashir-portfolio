import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: { "@": fileURLToPath(new URL("./", import.meta.url)) },
  },
  test: {
    // Unit tests cover plain logic in lib/; UI is covered by Playwright.
    environment: "node",
    include: ["tests/unit/**/*.test.ts"],
  },
});
