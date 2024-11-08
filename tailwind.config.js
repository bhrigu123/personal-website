// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: ['class', 'class'],
  theme: {
  	extend: {
  		lineHeight: {
  			'11': '2.75rem',
  			'12': '3rem',
  			'13': '3.25rem',
  			'14': '3.5rem'
  		},
  		fontFamily: {
  			sans: ['JetBrains Mono', ...fontFamily.sans],
  			mono: ['Fira Code', ...fontFamily.mono]
  		},
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			gray: 'colors.gray',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		width: {
  			'4.5': '1.125rem',
  			'5.5': '1.375rem'
  		},
  		height: {
  			'4.5': '1.125rem',
  			'5.5': '1.375rem'
  		},
  		typography: '({ theme }) => ({\n        DEFAULT: {\n          css: {\n            a: {\n              color: theme('colors.primary.500'),\n              '&:hover': {\n                color: `${theme('colors.primary.600')}`,\n              },\n              code: { color: theme('colors.primary.400') },\n            },\n            'h1,h2': {\n              fontWeight: '700',\n              letterSpacing: theme('letterSpacing.tight'),\n            },\n            h3: {\n              fontWeight: '600',\n            },\n            code: {\n              color: theme('colors.indigo.500'),\n            },\n          },\n        },\n        invert: {\n          css: {\n            a: {\n              color: theme('colors.primary.500'),\n              '&:hover': {\n                color: `${theme('colors.primary.400')}`,\n              },\n              code: { color: theme('colors.primary.400') },\n            },\n            'h1,h2,h3,h4,h5,h6': {\n              color: theme('colors.gray.100'),\n            },\n          },\n        },\n      })',
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require("tailwindcss-animate")],
}
