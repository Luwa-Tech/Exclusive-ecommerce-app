/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        primary: {
          500: '#FFFFFF',
          600: '#363738',
          // 700: 'rgb(41, 40, 40)'
        },
        secondary: {
          500: '#F5F5F5',
          600: '#FEFAF1',
          700: '#DB4444',
          800: '#d4d4d4'
        },
        textColor: {
          400: '#FAFAFA',
          500: '#7D8184',
          600: '#000000'
        },
        buttonColor: {
          400: '#000000',
          500: '#00FF66',
          600: '#DB4444',
          700: '#E07575',
          800: '#A0BCE0'
        }
      },

      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
    },
  }

}

