import { PluginAPI } from 'tailwindcss/types/config';

export = ({ matchUtilities, theme }: PluginAPI): void => {
    matchUtilities(
        {
            'animate-duration': (value: string) => ({
                'animation-duration': value
            })
        },
        {
            values: theme('animationDuration')
        }
    );
};
