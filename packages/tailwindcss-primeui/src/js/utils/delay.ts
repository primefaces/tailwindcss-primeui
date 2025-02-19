import type { PluginAPI } from 'tailwindcss/types/config';

export default ({ matchUtilities, theme }: PluginAPI): void => {
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
