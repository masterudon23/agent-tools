import react from "@vitejs/plugin-react";
import { convexVitePlugin } from "convex-vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), convexVitePlugin()],
});
