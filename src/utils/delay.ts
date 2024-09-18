import type { PluginAPI, PluginCreator } from 'tailwindcss/types/config';

const delay: PluginCreator = ({ matchUtilities, theme }: PluginAPI) =>
    matchUtilities(
        {
            'animate-delay': (value) => ({
                'animation-delay': value
            })
        },
        {
            values: theme('animationDelay')
        }
    );
export default delay;
