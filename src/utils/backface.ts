import { PluginAPI } from 'tailwindcss/types/config';

export = ({ addUtilities }: PluginAPI): void => {
    addUtilities({
        '.backface-visible': {
            'backface-visibility': 'visible'
        },
        '.backface-hidden': {
            'backface-visibility': 'hidden'
        }
    });
};
