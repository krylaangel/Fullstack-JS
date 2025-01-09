/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            backgroundImage: {
                'customlayered': "url('../image/man_rocks_sky.jpg')",
            },

            fontSize: {
                'xxs': '8px',
                '11xl': '240px'
            },
        },
    },
    plugins: [
        function ({addComponents}) {
            addComponents({
                '.menu-screen': {
                    'min-width': '7rem',
                    'padding-top': '0.75rem',
                    'padding-bottom': '0.75rem',
                    'padding-left': '0.75rem',
                    'padding-right': '0.75rem',
                    'color': '#fbfaff',
                    'transition': 'color 0.2s ease-in-out',
                    '&:hover': {
                        'color': '#94a3b8'
                    }
                },
                '.title-start': {
                    'color': '#fde68a',
                    'text-transform': 'uppercase',
                    'letter-spacing': '0.1em',
                    'font-size': '0.75rem',
                    '@screen md': {
                        'font-size': '1rem',
                    },
                    '@screen lg': {
                        'font-size': '1.125rem',
                    },
                },
                '.title-end': {
                    'padding-top': '0.75rem',
                    'padding-bottom': '0.75rem',
                    'padding-left': '10%',
                    'padding-right': '10%',
                    'font-size': '1.25rem',
                    '@screen sm': {
                        'font-size': '1.5rem',
                    },
                    '@screen md': {
                        'font-size': '1.875rem',
                        'padding-top': '1.75rem',
                        'padding-bottom': '1.75rem',
                    },
                    '@screen lg': {
                        'font-size': '2.25rem',
                    },
                    '@screen xl': {
                        'font-size': '3rem',
                    },
                },

                '.paragraph-style': {
                    'padding-left': '10%',
                    'padding-right': '10%',
                    'text-align': 'justify',
                    'font-size': '0.75rem',
                    '@screen md': {
                        'font-size': '1rem',
                    },
                    '@screen lg': {
                        'font-size': '1.125rem',
                    },
                    '@screen xl': {
                        'line-height': '2rem',
                    },
                },
            })
        }
    ],
}

