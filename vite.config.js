// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
// 	plugins: [react()],
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	build: {
		// Disable production sourcemaps to avoid source-map resolution errors during build
		sourcemap: false,
		minify: "terser",
		terserOptions: {
			keep_classnames: true,
			keep_fnames: true,
		},
		// Basic manual chunking to split vendor code and reduce single huge chunks
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes("node_modules")) {
						if (id.includes("react") || id.includes("react-dom"))
							return "react-vendor";
						if (id.includes("framer-motion")) return "framer-motion-vendor";
						if (id.includes("@relume_io") || id.includes("@flaticon"))
							return "ui-vendor";
						return "vendor";
					}
				},
			},
		},
		// Increase the chunk size warning limit to reduce noisy warnings; still keep an eye on bundle sizes
		chunkSizeWarningLimit: 1000,
	},
});
