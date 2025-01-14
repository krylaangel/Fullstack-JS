/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            fontFamily: {
                'mons-bold': ['mons-bold', 'serif'],
            },
            colors: {
                accent: 'var(--accentColor)',
                grayUniversal: 'var(--grayUniversalColor)',
                baseBg: 'var(--baseBgColor)',
                mainRg: 'var(--mainRgColor)',
                activeRg: 'var(--activeRgColor)',
                rectangleSeparator: 'var(--rectangleSeparator)',
            },
        },

    },
    plugins: [

    ],
}

