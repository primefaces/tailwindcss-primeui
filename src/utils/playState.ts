import type { PluginAPI, PluginCreator } from 'tailwindcss/types/config';

export default (({ addUtilities }: PluginAPI) =>
    addUtilities({
        '.animate-running': {
            'animation-play-state': 'running'
        },
        '.animate-paused': {
            'animation-play-state': 'paused'
        }
    })) satisfies PluginCreator;
