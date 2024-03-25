/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			dropShadow: {
        '3xl': '0 25px 25px rgba(0, 0, 0, 0.35)',
      }
		},
	},
	plugins: [],
}
