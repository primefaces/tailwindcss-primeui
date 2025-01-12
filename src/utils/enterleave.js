module.exports = ({ addUtilities, matchUtilities, theme }) => {
    addUtilities({
        '@keyframes enter': theme('keyframes.enter'),
        '@keyframes leave': theme('keyframes.leave'),
        '.animate-enter': {
            'animation-name': 'enter',
            '--p-enter-opacity': 'initial',
            '--p-enter-scale': 'initial',
            '--p-enter-rotate': 'initial',
            '--p-enter-translate-x': 'initial',
            '--p-enter-translate-y': 'initial'
        },
        '.animate-leave': {
            'animation-name': 'leave',
            '--p-leave-opacity': 'initial',
            '--p-leave-scale': 'initial',
            '--p-leave-rotate': 'initial',
            '--p-leave-translate-x': 'initial',
            '--p-leave-translate-y': 'initial'
        }
    });

    matchUtilities(
        {
            'fade-in': (value) => ({ '--p-enter-opacity': value }),
            'fade-out': (value) => ({ '--p-leave-opacity': value })
        },
        { values: theme('animationOpacity') }
    );

    matchUtilities(
        {
            'zoom-in': (value) => ({ '--p-enter-scale': value }),
            'zoom-out': (value) => ({ '--p-leave-scale': value })
        },
        { values: theme('animationScale') }
    );

    matchUtilities(
        {
            'spin-in': (value) => ({ '--p-enter-rotate': value }),
            'spin-out': (value) => ({ '--p-leave-rotate': value })
        },
        { values: theme('animationRotate') }
    );

    matchUtilities(
        {
            'slide-in-from-t': (value) => ({
                '--p-enter-translate-y': `-${value}`
            }),
            'slide-in-from-b': (value) => ({
                '--p-enter-translate-y': value
            }),
            'slide-in-from-l': (value) => ({
                '--p-enter-translate-x': `-${value}`
            }),
            'slide-in-from-r': (value) => ({
                '--p-enter-translate-x': value
            }),
            'slide-out-from-t': (value) => ({
                '--p-leave-translate-y': `-${value}`
            }),
            'slide-out-from-b': (value) => ({
                '--p-leave-translate-y': value
            }),
            'slide-out-from-l': (value) => ({
                '--p-leave-translate-x': `-${value}`
            }),
            'slide-out-from-r': (value) => ({
                '--p-leave-translate-x': value
            })
        },
        { values: theme('translate') }
    );
};
