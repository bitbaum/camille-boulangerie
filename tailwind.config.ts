import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: '#faf6f0', dark: '#f0e8dc' },
        terracotta: { DEFAULT: '#c45c3e', dark: '#a34a32' },
        espresso: { DEFAULT: '#2c1810', muted: '#5c4030' },
        wheat: '#e8d4a8',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
