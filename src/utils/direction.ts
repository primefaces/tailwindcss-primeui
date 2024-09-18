import type { PluginAPI, PluginCreator } from 'tailwindcss/types/config';

const direction: PluginCreator = ({ addUtilities }: PluginAPI) =>
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
    });
export default direction;
