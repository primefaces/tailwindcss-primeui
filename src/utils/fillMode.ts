import type { PluginAPI, PluginCreator } from 'tailwindcss/types/config';

export default (({ addUtilities }: PluginAPI) =>
    addUtilities({
        '.animate-fill-none': {
            'animation-fill-mode': 'none'
        },
        '.animate-fill-forwards': {
            'animation-fill-mode': 'forwards'
        },
        '.animate-fill-backwards': {
            'animation-fill-mode': 'backwards'
        },
        '.animate-fill-both': {
            'animation-fill-mode': 'both'
        }
    })) satisfies PluginCreator;
