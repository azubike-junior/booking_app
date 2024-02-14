import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '2560px',
    },
    
    
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif']
    },
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary-color': 'rgba(245, 134, 52, 1)',
        'ash': 'rgba(34, 40, 49, 1)',
        'light-ash': 'rgba(106, 106, 106, 1)',
        'brand-color': 'rgba(16, 55, 92, 1)'
      }
    },
    
  },
  plugins: [],
};
export default config;
