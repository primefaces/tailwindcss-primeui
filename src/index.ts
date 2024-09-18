import type { PluginsConfig } from 'tailwindcss/types/config';
import plugin from 'tailwindcss/plugin';

import theme from './theme';
import utils from './utils';

/**
 * Inferred type from PluginsConfig
 */
type PluginConfig = PluginsConfig[number];

export default plugin(
    (api) => {
        utils.backface(api);
        utils.delay(api);
        utils.direction(api);
        utils.duration(api);
        utils.fillMode(api);
        utils.iterationCount(api);
        utils.playState(api);
        utils.timingFunction(api);
        utils.preset(api);
    },
    { theme }
) satisfies PluginConfig;
