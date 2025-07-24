import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    test: {
        globals: true,
        environment: "jsdom",
        include: ["**/__tests__/**/*.test.ts"],
        coverage: {
            provider: "v8",
            reporter: ["text", "html"],
        },
    },
});
