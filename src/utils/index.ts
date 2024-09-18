import type { PluginCreator } from 'tailwindcss/types/config';

import backface from './backface';
import delay from './delay';
import direction from './direction';
import duration from './duration';
import fillMode from './fillMode';
import iterationCount from './iterationCount';
import playState from './playState';
import preset from './preset';
import timingFunction from './timingFunction';

const utils: { [key: string]: PluginCreator } = {
    backface,
    delay,
    direction,
    duration,
    fillMode,
    iterationCount,
    playState,
    preset,
    timingFunction
};
export default utils;
