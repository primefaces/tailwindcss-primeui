import type { PluginAPI, PluginCreator } from 'tailwindcss/types/config';

export default (({ matchUtilities, theme }: PluginAPI) =>
    matchUtilities(
        {
            'animate-delay': (value) => ({
                'animation-delay': value
            })
        },
        {
            values: theme('animationDelay')
        }
    )) satisfies PluginCreator;
