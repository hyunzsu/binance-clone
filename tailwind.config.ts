import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-ibm-plex)', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#181a20',
        textPimary: '#EAECEF',
        textTertiary: '#848E9C',
        inputLine: '#474D57',
        colorLine: '#2B3139',
        yellow: '#FCD535',
        customYellow: '#2E2A1E',
        green: '#2ebd85',
        pink: '#f6475d',
      },
      keyframes: {
        'loading-dot': {
          '0%': { opacity: '.2' },
          '20%': { opacity: '1' },
          '100%': { opacity: '.2' },
        },
      },
      animation: {
        'loading-dot': 'loading-dot 1.4s infinite ease-in-out',
      },
    },
  },
  plugins: [],
} satisfies Config;
