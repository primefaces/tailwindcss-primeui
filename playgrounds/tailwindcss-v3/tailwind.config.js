import PrimeUI from 'tailwindcss-primeui';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['index.html'],
    theme: {
        extend: {
            colors: {}
        }
    },
    plugins: [PrimeUI]
};
