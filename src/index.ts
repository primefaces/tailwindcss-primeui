import { PluginAPI } from 'tailwindcss/types/config';
import plugin from 'tailwindcss/plugin';

export = plugin(
    (api: PluginAPI) => {
        require('./utils/backface')(api);
        require('./utils/delay')(api);
        require('./utils/direction')(api);
        require('./utils/duration')(api);
        require('./utils/fillMode')(api);
        require('./utils/iterationCount')(api);
        require('./utils/playState')(api);
        require('./utils/timingFunction')(api);
        require('./utils/preset')(api);
        require('./utils/enterleave')(api);
    },
    {
        theme: require('./theme')
    }
);
