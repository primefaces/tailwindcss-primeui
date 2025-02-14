import { PluginAPI } from 'tailwindcss/types/config';

export = ({ matchUtilities, theme }: PluginAPI): void => {
    matchUtilities(
        {
            'animate-delay': (value: string) => ({
                'animation-delay': value
            })
        },
        {
            values: theme('animationDelay')
        }
    );
};
