import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'sans-poppins': ["'Noto Sans TC', 'Poppins',sans-serif", ...defaultTheme.fontFamily.sans],
				caveat: ["'Caveat', cursive", ...defaultTheme.fontFamily.sans]
			},
			keyframes: {
				blink: {
					'50%': { opacity: 0 }
				}
			},
			animation: {
				blink: 'blink 0.7s infinite'
			}
		}
	},
	plugins: []
};
