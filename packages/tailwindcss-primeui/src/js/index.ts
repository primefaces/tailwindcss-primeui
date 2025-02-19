import plugin from 'tailwindcss/plugin';
import type { PluginAPI } from 'tailwindcss/types/config';
import './types';

import theme from './theme.js';
import utils from './utils';

export default plugin(
    (api: PluginAPI) => {
        utils.backface(api);
        utils.delay(api);
        utils.direction(api);
        utils.duration(api);
        utils.fillMode(api);
        utils.iterationCount(api);
        utils.playState(api);
        utils.timingFunction(api);
        utils.preset(api);
        utils.enterleave(api);
    },
    {
        theme
    }
);
