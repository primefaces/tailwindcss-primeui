import type { PluginAPI } from 'tailwindcss/types/config';

export default ({ addUtilities }: PluginAPI): void => {
    addUtilities({
        '.backface-visible': {
            'backface-visibility': 'visible'
        },
        '.backface-hidden': {
            'backface-visibility': 'hidden'
        }
    });
};
