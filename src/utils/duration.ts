import type { PluginAPI, PluginCreator } from 'tailwindcss/types/config';

export default (({ matchUtilities, theme }: PluginAPI) =>
    matchUtilities(
        {
            'animate-duration': (value) => ({
                'animation-duration': value
            })
        },
        {
            values: theme('animationDuration')
        }
    )) satisfies PluginCreator;
