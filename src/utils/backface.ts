import type { PluginAPI, PluginCreator } from 'tailwindcss/types/config';

const backface: PluginCreator = ({ addUtilities }: PluginAPI) =>
    addUtilities({
        '.backface-visible': {
            'backface-visibility': 'visible'
        },
        '.backface-hidden': {
            'backface-visibility': 'hidden'
        }
    });
export default backface;
