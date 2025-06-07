// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

// 🎨 FONT CONFIGURATION - Change fonts easily here!
//
// CURRENT SETUP:
// - Content: Roboto Serif (elegant serif font)
// - Code: JetBrains Mono (monospace)
//
// TO CHANGE FONTS:
// 1. Update the FONTS object below
// 2. Update the imports in app/layout.tsx to match
// 3. Rebuild your site
//
// POPULAR FONT COMBINATIONS:
//
// → Modern & Clean:
//   content: { name: 'Inter', variable: '--font-inter' }
//   code: { name: 'Fira Code', variable: '--font-fira-code' }
//
// → Classic & Readable:
//   content: { name: 'Merriweather', variable: '--font-merriweather' }
//   code: { name: 'Source Code Pro', variable: '--font-source-code-pro' }
//
// → Elegant & Professional:
//   content: { name: 'Playfair Display', variable: '--font-playfair' }
//   code: { name: 'JetBrains Mono', variable: '--font-jetbrains' }
//
// → Minimalist:
//   content: { name: 'IBM Plex Sans', variable: '--font-ibm-plex' }
//   code: { name: 'IBM Plex Mono', variable: '--font-ibm-plex-mono' }

const FONTS = {
  // Main content font (body text, headings)
  content: {
    name: 'Roboto Serif',
    variable: '--font-roboto-serif',
    fallback: 'ui-serif, Georgia, serif',
  },
  // Code font (code blocks, inline code)
  code: {
    name: 'JetBrains Mono',
    fallback: 'ui-monospace, SFMono-Regular, Consolas, monospace',
  },
}

// 📏 LINE HEIGHT CONFIGURATION - Adjust readability here!
//
// CURRENT SETUP: 1.8 (increased for better readability with Roboto Serif)
//
// EXPERIMENT WITH THESE VALUES:
// → Tight: 1.6 (closer lines, more compact)
// → Default: 1.7 (standard spacing)
// → Comfortable: 1.8 (current - good for serif fonts)
// → Spacious: 1.9 (more breathing room)
// → Very Spacious: 2.0 (maximum readability)

const LINE_HEIGHT = {
  content: '1.8', // Main blog content
  headings: '1.3', // Headlines (tighter)
}

// Generate font stacks
const contentFontStack = `var(${FONTS.content.variable}), ${FONTS.content.fallback}`
const codeFontStack = `${FONTS.code.name}, ${FONTS.code.fallback}`

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
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: [`var(${FONTS.content.variable})`, ...fontFamily.sans],
        mono: [FONTS.code.name, ...fontFamily.mono],
      },
      colors: {
        primary: colors.teal,
        gray: colors.gray,
      },
      width: {
        4.5: '1.125rem',
        5.5: '1.375rem',
      },
      height: {
        4.5: '1.125rem',
        5.5: '1.375rem',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            fontSize: '1.125rem',
            lineHeight: LINE_HEIGHT.content,
            fontFamily: contentFontStack,
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2': {
              fontWeight: '700',
              lineHeight: LINE_HEIGHT.headings,
              letterSpacing: theme('letterSpacing.tight'),
              fontFamily: contentFontStack,
            },
            h3: {
              fontWeight: '600',
              lineHeight: LINE_HEIGHT.headings,
              fontFamily: contentFontStack,
            },
            'h4,h5,h6': {
              lineHeight: LINE_HEIGHT.headings,
              fontFamily: contentFontStack,
            },
            'p, li': {
              lineHeight: LINE_HEIGHT.content,
            },
            code: {
              color: theme('colors.indigo.500'),
              fontFamily: codeFontStack,
            },
            pre: {
              fontFamily: codeFontStack,
            },
          },
        },
        invert: {
          css: {
            fontSize: '1.125rem',
            lineHeight: LINE_HEIGHT.content,
            fontFamily: contentFontStack,
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: `${theme('colors.primary.400')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
              lineHeight: LINE_HEIGHT.headings,
              fontFamily: contentFontStack,
            },
            'p, li': {
              lineHeight: LINE_HEIGHT.content,
            },
            code: {
              fontFamily: codeFontStack,
            },
            pre: {
              fontFamily: codeFontStack,
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
