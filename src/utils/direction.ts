import type { PluginAPI, PluginCreator } from 'tailwindcss/types/config';

export default (({ addUtilities }: PluginAPI) =>
    addUtilities({
        '.animate-normal': {
            'animation-direction': 'normal'
        },
        '.animate-reverse': {
            'animation-direction': 'reverse'
        },
        '.animate-alternate': {
            'animation-direction': 'alternate'
        },
        '.animate-alternate-reverse': {
            'animation-direction': 'alternate-reverse'
        }
    })) satisfies PluginCreator;
