export declare type Shade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
export declare type ThemeColors = {
    primary: string;
    'primary-emphasis': string;
    'primary-emphasis-alt': string;
    'primary-contrast': string;
    'surface-0': string;
} & {
    [K in `primary-${Shade}` | `surface-${Shade}`]: string;
};

export declare type KeyFrameKeys =
    | 'enter'
    | 'leave'
    | 'fadein'
    | 'fadeout'
    | 'slidedown'
    | 'slideup'
    | 'scalein'
    | 'fadeinleft'
    | 'fadeoutleft'
    | 'fadeinright'
    | 'fadeoutright'
    | 'fadeinup'
    | 'fadeoutup'
    | 'fadeindown'
    | 'fadeoutdown'
    | 'width'
    | 'flip'
    | 'flipup'
    | 'flipleft'
    | 'flipright'
    | 'zoomin'
    | 'zoomindown'
    | 'zoominleft'
    | 'zoominright'
    | 'zoominup'
    | string;

export declare type KeyFrames = Record<KeyFrameKeys, Record<string, Record<string, string>>>;

export declare type AnimationDelayKeys = 0 | 75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000 | string;
export declare type AnimationDurationKeys = 0 | 75 | 100 | 150 | 200 | 300 | 400 | 500 | 700 | 1000 | 2000 | 3000 | string;
export declare type AnimationKeys =
    | 'fadein'
    | 'fadeout'
    | 'slidedown'
    | 'slideup'
    | 'scalein'
    | 'fadeinleft'
    | 'fadeoutleft'
    | 'fadeinright'
    | 'fadeoutright'
    | 'fadeinup'
    | 'fadeoutup'
    | 'fadeindown'
    | 'fadeoutdown'
    | 'width'
    | 'flip'
    | 'flipup'
    | 'flipleft'
    | 'flipright'
    | 'zoomin'
    | 'zoomindown'
    | 'zoominleft'
    | 'zoominright'
    | 'zoominup'
    | string;

declare module 'tailwindcss/types/config' {
    interface ThemeConfig {
        colors: ResolvableTo<RecursiveKeyValuePair>;
        keyframes: ResolvableTo<KeyValuePair<string, KeyValuePair<string, KeyValuePair>>>;
        animation: ResolvableTo<KeyValuePair<AnimationKeys>>;
        animationDelay: ResolvableTo<KeyValuePair<AnimationDelayKeys>>;
        animationDuration: ResolvableTo<KeyValuePair<AnimationDurationKeys>>;
        animationOpacity?: ThemeConfig['opacity'];
        animationTranslate?: ThemeConfig['spacing'];
        animationScale?: ResolvableTo<KeyValuePair>;
        animationRotate?: ResolvableTo<KeyValuePair>;
    }
}
