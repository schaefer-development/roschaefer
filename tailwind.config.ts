import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Titilium Web', 'PT Sans', 'Helvetica', 'Arial', 'sans-serif'],
				serif: ['PT Serif', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif']
			},
			height: {
				'1v': '1vh',
				'2v': '2vh',
				'3v': '3vh',
				'4v': '4vh',
				'5v': '5vh',
				'6v': '6vh',
				'7v': '7vh',
				'8v': '8vh',
				'9v': '9vh',
				'10v': '10vh',
				'15v': '15vh',
				'20v': '20vh',
				'30v': '30vh',
				'40v': '40vh',
				'50v': '50vh',
				'60v': '60vh',
				'70v': '70vh',
				'75v': '75vh',
				'80v': '80vh',
				'90v': '90vh',
				'100v': '100vh'
			},
			colors: {
				primary: {
					DEFAULT: '#33CCFF'
				}
			}
		}
	},

	plugins: []
} satisfies Config;
