// vite.config.js
import { defineConfig } from "file:///C:/Users/Samuel%20Johnson/Desktop/ViteReact/Name/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Samuel%20Johnson/Desktop/ViteReact/Name/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      react: path.resolve("./node_modules/react")
    },
    dedupe: ["react"]
  },
  build: {
    // Disable production sourcemaps to avoid source-map resolution errors during build
    sourcemap: false,
    minify: "terser",
    terserOptions: {
      keep_classnames: true,
      keep_fnames: true
    },
    // Basic manual chunking to split vendor code and reduce single huge chunks
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom"))
              return "react-vendor";
            if (id.includes("framer-motion"))
              return "framer-motion-vendor";
            if (id.includes("@relume_io") || id.includes("@flaticon"))
              return "ui-vendor";
            return "vendor";
          }
        }
      }
    },
    // Increase the chunk size warning limit to reduce noisy warnings; still keep an eye on bundle sizes
    chunkSizeWarningLimit: 1e3
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxTYW11ZWwgSm9obnNvblxcXFxEZXNrdG9wXFxcXFZpdGVSZWFjdFxcXFxOYW1lXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxTYW11ZWwgSm9obnNvblxcXFxEZXNrdG9wXFxcXFZpdGVSZWFjdFxcXFxOYW1lXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9TYW11ZWwlMjBKb2huc29uL0Rlc2t0b3AvVml0ZVJlYWN0L05hbWUvdml0ZS5jb25maWcuanNcIjsvLyBpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG4vLyBpbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XHJcblxyXG4vLyAvLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG4vLyBleHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4vLyBcdHBsdWdpbnM6IFtyZWFjdCgpXSxcclxuLy8gfSk7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcblx0cGx1Z2luczogW3JlYWN0KCldLFxyXG5cdHJlc29sdmU6IHtcclxuXHRcdGFsaWFzOiB7XHJcblx0XHRcdHJlYWN0OiBwYXRoLnJlc29sdmUoXCIuL25vZGVfbW9kdWxlcy9yZWFjdFwiKSxcclxuXHRcdH0sXHJcblx0XHRkZWR1cGU6IFtcInJlYWN0XCJdLFxyXG5cdH0sXHJcblx0YnVpbGQ6IHtcclxuXHRcdC8vIERpc2FibGUgcHJvZHVjdGlvbiBzb3VyY2VtYXBzIHRvIGF2b2lkIHNvdXJjZS1tYXAgcmVzb2x1dGlvbiBlcnJvcnMgZHVyaW5nIGJ1aWxkXHJcblx0XHRzb3VyY2VtYXA6IGZhbHNlLFxyXG5cdFx0bWluaWZ5OiBcInRlcnNlclwiLFxyXG5cdFx0dGVyc2VyT3B0aW9uczoge1xyXG5cdFx0XHRrZWVwX2NsYXNzbmFtZXM6IHRydWUsXHJcblx0XHRcdGtlZXBfZm5hbWVzOiB0cnVlLFxyXG5cdFx0fSxcclxuXHRcdC8vIEJhc2ljIG1hbnVhbCBjaHVua2luZyB0byBzcGxpdCB2ZW5kb3IgY29kZSBhbmQgcmVkdWNlIHNpbmdsZSBodWdlIGNodW5rc1xyXG5cdFx0cm9sbHVwT3B0aW9uczoge1xyXG5cdFx0XHRvdXRwdXQ6IHtcclxuXHRcdFx0XHRtYW51YWxDaHVua3MoaWQpIHtcclxuXHRcdFx0XHRcdGlmIChpZC5pbmNsdWRlcyhcIm5vZGVfbW9kdWxlc1wiKSkge1xyXG5cdFx0XHRcdFx0XHRpZiAoaWQuaW5jbHVkZXMoXCJyZWFjdFwiKSB8fCBpZC5pbmNsdWRlcyhcInJlYWN0LWRvbVwiKSlcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gXCJyZWFjdC12ZW5kb3JcIjtcclxuXHRcdFx0XHRcdFx0aWYgKGlkLmluY2x1ZGVzKFwiZnJhbWVyLW1vdGlvblwiKSkgcmV0dXJuIFwiZnJhbWVyLW1vdGlvbi12ZW5kb3JcIjtcclxuXHRcdFx0XHRcdFx0aWYgKGlkLmluY2x1ZGVzKFwiQHJlbHVtZV9pb1wiKSB8fCBpZC5pbmNsdWRlcyhcIkBmbGF0aWNvblwiKSlcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gXCJ1aS12ZW5kb3JcIjtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIFwidmVuZG9yXCI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHQvLyBJbmNyZWFzZSB0aGUgY2h1bmsgc2l6ZSB3YXJuaW5nIGxpbWl0IHRvIHJlZHVjZSBub2lzeSB3YXJuaW5nczsgc3RpbGwga2VlcCBhbiBleWUgb24gYnVuZGxlIHNpemVzXHJcblx0XHRjaHVua1NpemVXYXJuaW5nTGltaXQ6IDEwMDAsXHJcblx0fSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFPQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBRWpCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzNCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixTQUFTO0FBQUEsSUFDUixPQUFPO0FBQUEsTUFDTixPQUFPLEtBQUssUUFBUSxzQkFBc0I7QUFBQSxJQUMzQztBQUFBLElBQ0EsUUFBUSxDQUFDLE9BQU87QUFBQSxFQUNqQjtBQUFBLEVBQ0EsT0FBTztBQUFBO0FBQUEsSUFFTixXQUFXO0FBQUEsSUFDWCxRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDZCxpQkFBaUI7QUFBQSxNQUNqQixhQUFhO0FBQUEsSUFDZDtBQUFBO0FBQUEsSUFFQSxlQUFlO0FBQUEsTUFDZCxRQUFRO0FBQUEsUUFDUCxhQUFhLElBQUk7QUFDaEIsY0FBSSxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQ2hDLGdCQUFJLEdBQUcsU0FBUyxPQUFPLEtBQUssR0FBRyxTQUFTLFdBQVc7QUFDbEQscUJBQU87QUFDUixnQkFBSSxHQUFHLFNBQVMsZUFBZTtBQUFHLHFCQUFPO0FBQ3pDLGdCQUFJLEdBQUcsU0FBUyxZQUFZLEtBQUssR0FBRyxTQUFTLFdBQVc7QUFDdkQscUJBQU87QUFDUixtQkFBTztBQUFBLFVBQ1I7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQTtBQUFBLElBRUEsdUJBQXVCO0FBQUEsRUFDeEI7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
