import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
<<<<<<< HEAD

=======
import { componentTagger } from "lovable-tagger";
>>>>>>> 63891759c5c0ec28bf1d45e341bf8eb3894b48a6

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
<<<<<<< HEAD
  plugins: [react()],
=======
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
>>>>>>> 63891759c5c0ec28bf1d45e341bf8eb3894b48a6
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})); remove lovable and give
