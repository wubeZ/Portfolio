import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        'primary': ["Roboto", "sans-serif"],
        "secondary": ["Roboto Mono", "sans-serif"],
        "third": ["Source Sans 3", "sans-serif"],
        "tech": ["Victor Mono","monospace"]
      },
      colors: {
        "secondary" : "#a9a6b1"
      }
    },
  },
  plugins: [],
}
export default config
