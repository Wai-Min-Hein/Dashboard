/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      'header-light': ['HkGroteskLight', 'sans-serif'],
      'header-medium': ['HkGroteskMedium', 'sans-serif'],
      'header-regular': ['HkGroteskRegular', 'sans-serif'],
      'header-regular-legacy': ['HkGroteskRegularLegacy', 'sans-serif'],
      'para': ['Poppins', 'sans-serif'],
      
    },
    extend: {
      colors: {
        //Light Theme

        'light-side-bar-color': '#405189',
        'light-gray-bg': '#f3f3f9',
        'light-white-bg': '#ffffff',
        'light-body-text-color': '#212529',
        'light-side-bar-text-color': '#abb9e8',
        'light-heading-text-color': '#495057',
        'light-card-heading-text-color': '#878a99',
        'light-btn-color': '#878a99',









        //Dark Theme

        'dark-side-bar-color': '#212529',
        'dark-nav-bar-color': '#292832',














          'light': '#f3f6f9',
          'dark': '#212529',
          'blue': '#3577f1',
          'purple': '#6559cc',
          'pink': '#f672a7',
          'red': '#f06548',
          'orange': '#f1963b',
          'yellow': '#f7b84b',
          'green': '#0ab39c',
          'teal': '#02a8b5',
          'cyan': '#299cdb',
          'white': '#fff',
          'gray': '#878a99',
          'gray-dark': '#343a40',
          'gray-100': '#f3f6f9',
          'gray-200': '#eff2f7',
          'gray-300': '#e9ebec',
          'gray-400': '#ced4da',
          'gray-500': '#adb5bd',
          'gray-600': '#878a99',
          'gray-700': '#495057',
          'gray-800': '#343a40',
          'gray-900': '#212529',
          'primary': '#405189',
          'secondary': '#3577f1',
          'success': '#0ab39c',
          'info': '#299cdb',
          'warning': '#f7b84b',
          'danger': '#f06548',
          
      },
      // backgroundImage: {
      //   'black': 'linear-gradient(rgba(15, 14, 23, 0.5), rgba(15, 14, 23, 0.5))',


      //   'background': ' linear-gradient(3deg, rgb(237,242,244),rgb(247,237,226));'
        
      // }
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

      '2xl': '1537px',
      // => @media (min-width: 1537px) { ... }
    }
  },
  plugins: [],
}

