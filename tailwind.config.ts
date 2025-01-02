import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				"aqua-glow": "var(--aqua-glow)",
				"deep-ocean": "var(--deep-ocean)",
				"steel-mist": "var(--steel-mist)",
				"pure-white": "var(--pure-white)",
				"midnight-shadow": "var(--midnight-shadow)",
				"crimson-alert": "var(--crimson-alert)",
			},
		},
	},
  	plugins: [],
} satisfies Config;
