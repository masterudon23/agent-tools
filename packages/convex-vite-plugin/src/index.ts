import type { Plugin } from "vite";

export function convexVitePlugin(): Plugin {
  return {
    name: "convex-vite-plugin",
    configResolved(config) {
      console.log("[convex-vite-plugin] Hello from convex-vite-plugin!");
      console.log(`[convex-vite-plugin] Building for: ${config.mode}`);
    },
  };
}
