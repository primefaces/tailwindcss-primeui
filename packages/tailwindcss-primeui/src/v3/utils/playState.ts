import type { PluginAPI } from 'tailwindcss/types/config';

export default ({ addUtilities }: PluginAPI): void => {
    addUtilities({
        '.animate-running': {
            'animation-play-state': 'running'
        },
        '.animate-paused': {
            'animation-play-state': 'paused'
        }
    });
};
