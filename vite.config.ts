import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
/// <reference types="vitest" />
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
