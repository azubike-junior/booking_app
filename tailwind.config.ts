import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      // screens: {
      
      //   lg: "1124px",
      //   xl: "1300px",
      //   "2xl": "1300px"
      // },
    },
   

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


    

    extend: {
   
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    
      colors: {
        'primary-color': 'rgba(245, 134, 52, 1)',
        'ash': 'rgba(34, 40, 49, 1)',
        'light-ash': 'rgba(106, 106, 106, 1)',
        'brand-color': 'rgba(16, 55, 92, 1)',
        '_green': '#1A2B47',
        '_grad':'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 44%, rgba(204,204,204,1) 100%)'
      }
    },
    
  },
  plugins: [],
};
export default config;
