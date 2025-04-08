	import { reactRouter } from "@react-router/dev/vite";
	import tailwindcss from "@tailwindcss/vite";
	import { defineConfig } from "vite";
	import tsconfigPaths from "vite-tsconfig-paths";
	import netlifyPlugin from "@netlify/vite-plugin-react-router";

	export default defineConfig({
		cacheDir: "node_modules/.vite",
		plugins: [tailwindcss(), reactRouter(), tsconfigPaths(), netlifyPlugin()],
		optimizeDeps: {
			include: [],
			esbuildOptions: {
				keepNames: true,
			},
		},
		build: {
			target: "es2020",
			outDir: "build/client",
			ssr: false,
		},
		server: {
			fs: {
				strict: false,
			},
			watch: {
				ignored: ["**/node_modules/**"],
			},
		},
	});
