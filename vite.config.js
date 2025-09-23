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
		sourcemap: true, // Ensure sourcemaps are generated
		minify: "terser", // Use terser for better sourcemap support
		terserOptions: {
			keep_classnames: true,
			keep_fnames: true,
		},
	},
});
