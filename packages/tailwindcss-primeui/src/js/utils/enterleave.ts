import type { PluginAPI } from 'tailwindcss/types/config';

export default ({ addUtilities, matchUtilities, theme }: PluginAPI): void => {
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
            'fade-in': (value: string) => ({ '--p-enter-opacity': value }),
            'fade-out': (value: string) => ({ '--p-leave-opacity': value })
        },
        { values: theme('animationOpacity') }
    );

    matchUtilities(
        {
            'zoom-in': (value: string) => ({ '--p-enter-scale': value }),
            'zoom-out': (value: string) => ({ '--p-leave-scale': value })
        },
        { values: theme('animationScale') }
    );

    matchUtilities(
        {
            'spin-in': (value: string) => ({ '--p-enter-rotate': value }),
            'spin-out': (value: string) => ({ '--p-leave-rotate': value })
        },
        { values: theme('animationRotate') }
    );

    matchUtilities(
        {
            'slide-in-from-t': (value: string) => ({
                '--p-enter-translate-y': `-${value}`
            }),
            'slide-in-from-b': (value: string) => ({
                '--p-enter-translate-y': value
            }),
            'slide-in-from-l': (value: string) => ({
                '--p-enter-translate-x': `-${value}`
            }),
            'slide-in-from-r': (value: string) => ({
                '--p-enter-translate-x': value
            }),
            'slide-out-from-t': (value: string) => ({
                '--p-leave-translate-y': `-${value}`
            }),
            'slide-out-from-b': (value: string) => ({
                '--p-leave-translate-y': value
            }),
            'slide-out-from-l': (value: string) => ({
                '--p-leave-translate-x': `-${value}`
            }),
            'slide-out-from-r': (value: string) => ({
                '--p-leave-translate-x': value
            })
        },
        { values: theme('translate') }
    );
};
