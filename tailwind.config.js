/** @type {import('tailwindcss').Config} */

import relumeTailwind from "@relume_io/relume-tailwind";
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],

	theme: {
		extend: {
			colors: {
				// Utility basics
				white: "#FFFFFF",
				black: "#242424",
				grey: "#F3F3F3",
				"dark-grey": "#6B6B6B",
				red: "#FF4E4E",
				transparent: "transparent",
				twitter: "#1DA1F2",
				purple: "#8B46FF",

				// Palette A — Calm Professional (default)
				bg: "#F6F8FA",
				surface: "#FFFFFF",
				"text-primary": "#0F1724",
				"text-muted": "#344055",
				brand: {
					DEFAULT: "#2563EB",
					dark: "#1D4ED8",
				},
				accent: "#06B6D4",

				// Palette D — Muted Teal
				themeTeal: {
					bg: "#F3FAFA",
					surface: "#FFFFFF",
					text: "#073642",
					muted: "#234E52",
					brand: "#0EA5A4",
					accent: "#67E8F9",
				},

				// Palette E — Refined Dark
				themeDark: {
					bg: "#0B1220",
					surface: "#0F1724",
					text: "#E6EEF4",
					muted: "#9FB2C8",
					brand: "#1E90FF",
					accent: "#FFD166",
				},
			},

			fontSize: {
				sm: "12px",
				base: "14px",
				xl: "16px",
				"2xl": "20px",
				"3xl": "28px",
				"4xl": "38px",
				"5xl": "50px",
			},

			fontFamily: {
				inter: ["'Inter'", "sans-serif"],
				gelasio: ["'Gelasio'", "serif"],
			},
		},
	},
	plugins: [],
	presets: [relumeTailwind],
};
