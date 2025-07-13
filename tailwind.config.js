/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#18120E', // main dark background
        card: '#231A15',      // card background
        sidebar: '#1C1511',   // sidebar background
        accent: '#FF7A29',    // orange accent
        accent2: '#FFB26B',   // lighter orange
        text: '#F5F3F0',      // main text
        muted: '#A09B96',     // muted text
        border: '#2C211B',    // card borders
        white: '#fff',
        black: '#000',
      },
      borderRadius: {
        xl: '1.5rem',
        lg: '1rem',
        md: '0.75rem',
        sm: '0.5rem',
      },
      boxShadow: {
        card: '0 4px 32px 0 rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [],
} 