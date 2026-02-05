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
        panel: '#152936',
        'panel-2': '#1e3646',
        text: '#eaf6ff',
        muted: '#6272a4', // Dracula Comment
        blue: '#8be9fd', // Dracula Cyan
        green: '#50fa7b', // Dracula Green
        gold: '#f1fa8c', // Dracula Yellow
        'gold-2': '#ffb86c', // Dracula Orange
        danger: '#ff5555', // Dracula Red
        ok: '#50fa7b', // Alias to Green
      },
      borderRadius: {
        sm: '12px',
        md: '24px',
      },
      boxShadow: {
        lg: '0 10px 30px -10px rgba(2, 12, 20, 0.7)',
      },
      // Explicitly preferred spacing scale for consistency
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
      },
    },
  },
  plugins: [],
};

export default config;
