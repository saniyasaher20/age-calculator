/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                purple: "hsl(259, 100%, 65%)",
                lightRed: "hsl(0, 100%, 67%)",
                offWhite: "hsl(0, 0%, 94%)",
                lightGray: "hsl(0, 0%, 86%)",
                smokeyGrey: "hsl(0, 1%, 44%)",
                offBlack: "hsl(0, 0%, 8%)",
            },
        },
    },
    plugins: [],
};
