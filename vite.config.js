import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
	base: "./",
	plugins: [react()],
	resolve: {
		alias: {
			react: path.resolve("./node_modules/react"),
		},
		dedupe: ["react"],
	},
	build: {
		// Keep sourcemaps disabled for production unless needed
		sourcemap: false,

		// Let Vite choose esbuild for faster builds unless you explicitly need Terser
		// Remove minify: "terser" unless you must preserve classnames/fnames
		minify: "terser",
		terserOptions: {
			format: {
				comments: false, // remove comments from output for cleaner builds
			},
			compress: true,
			mangle: true,
			keep_classnames: true,
			keep_fnames: true,
		},

		// Split vendor code into chunks to optimize load performance
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes("node_modules")) {
						if (id.includes("react") || id.includes("react-dom")) {
							return "react-vendor";
						}
						if (id.includes("framer-motion")) return "framer-motion-vendor";
						if (id.includes("@relume_io") || id.includes("@flaticon"))
							return "ui-vendor";
						return "vendor";
					}
				},
			},
		},

		// Raise warning limit (optional)
		chunkSizeWarningLimit: 1000,
	},
});
