/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FBF3E7',
          light: '#FFFDF8',
          dark: '#F3E8D6',
        },
        espresso: {
          DEFAULT: '#3A2418',
          light: '#5A3C2A',
          dark: '#251508',
        },
        berry: {
          DEFAULT: '#C13F5B',
          light: '#DA6E85',
          dark: '#8F2B41',
        },
        gold: {
          DEFAULT: '#D6A24A',
          light: '#EAC482',
          dark: '#AD7C2E',
        },
        sage: {
          DEFAULT: '#8C9A6E',
          light: '#AEBB94',
          dark: '#6B7852',
        },
        blush: {
          DEFAULT: '#F3D7DC',
          light: '#FAEAEC',
        },
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-manrope)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      boxShadow: {
        soft: '0 8px 30px rgba(58, 36, 24, 0.08)',
        card: '0 4px 20px rgba(58, 36, 24, 0.10)',
        lift: '0 20px 40px rgba(58, 36, 24, 0.18)',
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(3deg)' },
        },
        drip: {
          '0%': { transform: 'scaleY(0.9)' },
          '50%': { transform: 'scaleY(1)' },
          '100%': { transform: 'scaleY(0.9)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        drip: 'drip 4s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
