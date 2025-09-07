import type { Config } from 'tailwindcss'

const config: Config={
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'primary': {
					DEFAULT: '#8B5CF6',
					50: '#F5F3FF',
					100: '#EDE9FE',
					200: '#DDD6FE',
					300: '#C4B5FD',
					400: '#A78BFA',
					500: '#8B5CF6',
					600: '#7C3AED',
					700: '#6D28D9',
					800: '#5B21B6',
					900: '#4C1D95',
				},
				'dark-purple': {
					DEFAULT: '#312E81',
					50: '#E0E7FF',
					100: '#CDDBFE',
					200: '#A5B4FC',
					300: '#818CF8',
					400: '#6366F1',
					500: '#4F46E5',
					600: '#4338CA',
					700: '#3730A3',
					800: '#312E81',
					900: '#1E1B4B',
				},
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'purple-gradient': 'linear-gradient(to right, #8B5CF6, #A855F7)',
				'dark-gradient': 'linear-gradient(to bottom, #1E1B4B, #312E81)',
			},
			animation: {
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
			boxShadow: {
				'glow': '0 0 15px rgba(139, 92, 246, 0.5)',
			},
			backdropBlur: {
				'xs': '2px',
			},
		},
	},
	plugins: [],
}

export default config
