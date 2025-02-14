import { PluginAPI } from 'tailwindcss/types/config';

export = ({ addUtilities }: PluginAPI): void => {
    addUtilities({
        '.animate-infinite': {
            'animation-iteration-count': 'infinite'
        },
        '.animate-once': {
            'animation-iteration-count': '1'
        },
        '.animate-twice': {
            'animation-iteration-count': '2'
        }
    });
};
