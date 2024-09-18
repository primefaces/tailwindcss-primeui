import type { PluginAPI, PluginCreator } from 'tailwindcss/types/config';

const duration: PluginCreator = ({ matchUtilities, theme }: PluginAPI) =>
    matchUtilities(
        {
            'animate-duration': (value) => ({
                'animation-duration': value
            })
        },
        {
            values: theme('animationDuration')
        }
    );
export default duration;
