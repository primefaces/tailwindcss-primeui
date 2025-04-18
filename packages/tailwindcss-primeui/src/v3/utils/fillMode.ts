import type { PluginAPI } from 'tailwindcss/types/config';

export default ({ addUtilities }: PluginAPI): void => {
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
    });
};
