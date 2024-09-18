import type { PluginAPI, PluginCreator } from 'tailwindcss/types/config';

const iterationCount: PluginCreator = ({ addUtilities }: PluginAPI) =>
    addUtilities({
        '.animate-infinite': {
            'animation-iteration-count': 'infinite'
        },
        '.animate-once': {
            'animation-iteration-count': '1'
        },
        '.animate-twice': {
            'animation-iteration-count': '2'
        }
    });
export default iterationCount;
