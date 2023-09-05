/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			keyframes: {
				moveAround: {
					'0%': {
						top: 0,
						left: 0
					},
					'25%': {
						top: '25%',
						left: '74%'
					},
					'50%': {
						top: '75%',
						left: '75%'
					},
					'75%': {
						top: '50%',
						left: '0%'
					},
					'100%': {
						top: '0',
						left: '0'
					}
				}
			},
			animation: {
				moveAround: 'moveAround 15s ease-in-out infinite'
			}
		}
	},
	plugins: []
};
