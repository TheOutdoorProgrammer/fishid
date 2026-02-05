import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0b1f2d',
        panel: '#102b3a',
        'panel-2': '#123447',
        text: '#eaf6ff',
        muted: '#a8c1d3',
        blue: '#1a6ea5',
        green: '#1f7a4f',
        gold: '#f2c04c',
        'gold-2': '#ffd37a',
        danger: '#e04b4b',
        ok: '#29c56b',
      },
      borderRadius: {
        sm: '18px',
        md: '26px',
      },
      boxShadow: {
        lg: '0 10px 28px rgba(0,0,0,.35)',
      },
    },
  },
  plugins: [],
};

export default config;
