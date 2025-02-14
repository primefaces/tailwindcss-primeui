import { PluginAPI } from 'tailwindcss/types/config';

export = ({ addUtilities }: PluginAPI): void => {
    addUtilities({
        '.animate-running': {
            'animation-play-state': 'running'
        },
        '.animate-paused': {
            'animation-play-state': 'paused'
        }
    });
};
