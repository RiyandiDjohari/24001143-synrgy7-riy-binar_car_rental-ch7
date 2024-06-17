/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary': "#0D28A6",
      },
      backgroundColor : {
        'primary': "#0D28A6",
        'secondary': "#F1F3FF"
      },
      fontFamily: {
        rubik : ['Rubik', "sans-serif"] 
      },
      container: {
        // you can configure the container to be centered
        center: true,
        // or have default horizontal padding
        padding: '1rem',
        // default breakpoints but with 40px removed
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1496px',
        },
      },
    },
  },
  plugins: [],
}

