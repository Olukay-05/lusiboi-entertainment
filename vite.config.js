import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/lusiboi-entertainment/", // Add this line
  plugins: [react()],
});
