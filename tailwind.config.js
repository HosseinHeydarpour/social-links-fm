/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				customGreen: 'hsl(75, 94%, 57%)',
				customWhite: 'hsl(0, 0%, 100%)',
				grey: {
					700: 'hsl(0, 0%, 20%)',
					800: 'hsl(0, 0%, 12%)',
					900: 'hsl(0, 0%, 8%)',
				},
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'], // This makes Inter your default sans font
				inter: ['Inter', 'sans-serif'], // Optional: lets you use utility class 'font-inter'
			},
		},
	},
	plugins: [],
};
