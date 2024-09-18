import type { PluginAPI, PluginCreator } from 'tailwindcss/types/config';

const playState: PluginCreator = ({ addUtilities }: PluginAPI) =>
    addUtilities({
        '.animate-running': {
            'animation-play-state': 'running'
        },
        '.animate-paused': {
            'animation-play-state': 'paused'
        }
    });
export default playState;
