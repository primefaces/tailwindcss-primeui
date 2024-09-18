import type { PluginAPI, PluginCreator } from 'tailwindcss/types/config';

export default (({ addUtilities }: PluginAPI) =>
    addUtilities({
        '.backface-visible': {
            'backface-visibility': 'visible'
        },
        '.backface-hidden': {
            'backface-visibility': 'hidden'
        }
    })) satisfies PluginCreator;
