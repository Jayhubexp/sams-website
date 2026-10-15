/** @type {import('tailwindcss').Config} */


export default {
	darkMode: "class",
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
	],

	theme: {
		extend: {
			colors: {
				cyber: {
					dark: "#070b14",
					card: "rgba(15, 23, 42, 0.65)",
					border: "rgba(255, 255, 255, 0.08)",
					hover: "rgba(255, 255, 255, 0.12)",
					blue: "#3b82f6",
					cyan: "#06b6d4",
					purple: "#8b5cf6",
					emerald: "#10b981",
					amber: "#f59e0b",
					rose: "#f43f5e",
				},
				brand: {
					DEFAULT: "#2563EB",
					dark: "#1D4ED8",
					light: "#60A5FA",
					accent: "#06B6D4",
				},
			},

			fontFamily: {
				sans: ["'Plus Jakarta Sans'", "'Inter'", "sans-serif"],
				display: ["'Outfit'", "'Plus Jakarta Sans'", "sans-serif"],
				mono: ["'JetBrains Mono'", "monospace"],
			},

			animation: {
				"pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
				"float": "float 6s ease-in-out infinite",
				"float-delayed": "float 6s ease-in-out 3s infinite",
				"glow": "glow 3s ease-in-out infinite alternate",
				"scanline": "scanline 8s linear infinite",
				"spin-slow": "spin 12s linear infinite",
				"gradient-x": "gradient-x 6s ease infinite",
			},

			keyframes: {
				float: {
					"0%, 100%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-12px)" },
				},
				glow: {
					"0%": { opacity: "0.4", filter: "blur(20px)" },
					"100%": { opacity: "0.8", filter: "blur(30px)" },
				},
				scanline: {
					"0%": { transform: "translateY(-100%)" },
					"100%": { transform: "translateY(1000%)" },
				},
				"gradient-x": {
					"0%, 100%": {
						"background-size": "200% 200%",
						"background-position": "left center",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "right center",
					},
				},
			},
			boxShadow: {
				"neon-cyan": "0 0 25px -5px rgba(6, 182, 212, 0.45)",
				"neon-blue": "0 0 25px -5px rgba(59, 130, 246, 0.45)",
				"neon-purple": "0 0 25px -5px rgba(139, 92, 246, 0.45)",
				"neon-emerald": "0 0 25px -5px rgba(16, 185, 129, 0.45)",
				"glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
			},
		},
	},
	plugins: [],
	presets: [],
};

