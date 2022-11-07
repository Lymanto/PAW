const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        fontFamily: {
            poppins: "Poppins, sans-serif",
        },
        fontSize: {
            sm: "0.875rem", // 14px
            base: "1rem", //16px
            lg: "1.125rem", //18px
            xl: "1.375rem", //22px
            "2xl": "2rem", //32px
        },
        extend: {
            colors: {
                alerange: "#FF7D30",
                "gray-1": "#B4B4B4",
                "gray-2": "#E2E0E0",
                "form-bg": "#212121",
                "gray-3": "#E5E9F2",
                "gray-4": "#999AA4",
            },
            screens: {
                laptopLg: "1160px",
                laptopXl: "1360px",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
