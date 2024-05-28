# Tailwind CSS Utilities for Prime UI Libraries

Extended utilities to integrate Prime UI library theming with Tailwind CSS and add the missing animation utilities from the legacy PrimeFlex.

## Prime UI Library

This plugin requires a Prime UI library with the next-gen theming, compatible with styled and unstyled modes.

-   primevue v4+
-   primeng v18+
-   @primereact/core v1+

## Installation

Install the plugin from npm.

```sh
npm i tailwindcss-primeui
```

Add the plugin to your tailwind.config.js file.

```js
// tailwind.config.js
module.exports = {
    // ...
    plugins: [require('tailwindcss-primeui')]
};
```

## Colors

Prime UI libraries utilize a color palette that consists of primary colors and surfaces, these colors can be used as Tailwind extensions.

```html
<div class="bg-primary text-primary-contrast border-primary-500">Content</div>
<div class="bg-surface-50 dark:bg-surface-900 text-surface-900 dark:text-surface-0 border-surface-200 dark:border-surface-700">Content</div>
```

| Color            | Description                    |
| ---------------- | ------------------------------ |
| primary-[50-950] | Primary colors                 |
| surface-[0-950]  | Surface colors                 |
| primary          | Default primary color          |
| primary-contrast | Default primary contrast color |
| primary-emphasis | Default primary emphasis color |

Special preset classes defined by the Prime UI library theme preset such as Aura, Lara, or Nora.

| Color                     | Description                               |
| ------------------------- | ----------------------------------------- |
| border-surface            | Border color                              |
| bg-emphasis               | Emphasis background, e.g. hovered element |
| bg-highlight              | Highlight background                      |
| bg-highlight-emphasis     | Highlight background with emphasis        |
| rounded-border            | Border radius                             |
| text-color                | Text color                                |
| text-color-emphasis       | Text color with emphasis                  |
| text-muted-color          | Secondary text color                      |
| text-muted-color-emphasis | Secondary text color with emphasis        |

## Animations

PrimeFlex provide various animation utilities that are missing in Tailwind CSS core, this plugin adds these plugins for migration.

### Duration

| Class                 | Properties                  |
| --------------------- | --------------------------- |
| animate-duration-0    | animation-duration: 0s;     |
| animate-duration-75   | animation-duration: 75ms;   |
| animate-duration-100  | animation-duration: 100ms;  |
| animate-duration-150  | animation-duration: 150ms;  |
| animate-duration-200  | animation-duration: 200ms;  |
| animate-duration-300  | animation-duration: 300ms;  |
| animate-duration-400  | animation-duration: 400ms;  |
| animate-duration-500  | animation-duration: 500ms;  |
| animate-duration-700  | animation-duration: 700ms;  |
| animate-duration-1000 | animation-duration: 1000ms; |
| animate-duration-2000 | animation-duration: 2000ms; |
| animate-duration-3000 | animation-duration: 3000ms; |

### Delay

| Class              | Properties               |
| ------------------ | ------------------------ |
| animate-delay-none | animation-delay: 0ms;    |
| animate-delay-75   | animation-delay: 75ms;   |
| animate-delay-100  | animation-delay: 100ms;  |
| animate-delay-150  | animation-delay: 150ms;  |
| animate-delay-200  | animation-delay: 200ms;  |
| animate-delay-300  | animation-delay: 300ms;  |
| animate-delay-400  | animation-delay: 400ms;  |
| animate-delay-500  | animation-delay: 500ms;  |
| animate-delay-700  | animation-delay: 700ms;  |
| animate-delay-1000 | animation-delay: 1000ms; |

### Iteration Count

| Class            | Properties                           |
| ---------------- | ------------------------------------ |
| animate-infinite | animation-iteration-count: infinite; |
| animate-once     | animation-iteration-count: 1;        |
| animate-twice    | animation-iteration-count: 2;        |

### Direction

| Class                     | Properties                              |
| ------------------------- | --------------------------------------- |
| animate-normal            | animation-direction: normal;            |
| animate-reverse           | animation-direction: reverse;           |
| animate-alternate         | animation-direction: alternate;         |
| animate-alternate-reverse | animation-direction: alternate-reverse; |

### Timing Function

| Class               | Properties                                               |
| ------------------- | -------------------------------------------------------- |
| animate-ease-linear | animation-timing-function: linear;                       |
| animate-ease-in     | animation-timing-function: cubic-bezier(0.4, 0, 1, 1);   |
| animate-ease-out    | animation-timing-function: cubic-bezier(0, 0, 0.2, 1);   |
| animate-ease-in-out | animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); |

### Fill Mode

| Class                  | Properties                      |
| ---------------------- | ------------------------------- |
| animate-fill-none      | animation-fill-mode: normal;    |
| animate-fill-forwards  | animation-fill-mode: forwards;  |
| animate-fill-backwards | animation-fill-mode: backwards; |
| animate-fill-both      | animation-fill-mode: both;      |

### Play State

| Class           | Properties                     |
| --------------- | ------------------------------ |
| animate-running | animation-play-state: running; |
| animate-paused  | animation-play-state: paused;  |

### Backface Visibility

| Class            | Properties                    |
| ---------------- | ----------------------------- |
| backface-visible | backface-visibility: visible; |
| backface-hidden  | backface-visibility: hidden;  |

### Animations

| Class                | Properties                             |
| -------------------- | -------------------------------------- |
| animate-fadein       | fadein 0.15s linear                    |
| animate-fadeout      | fadeout 0.15s linear                   |
| animate-slidedown    | slidedown 0.45s ease-in-out            |
| animate-slideup      | slideup 0.45s cubic-bezier(0, 1, 0, 1) |
| animate-scalein      | scalein 0.15s linear                   |
| animate-fadeinleft   | fadeinleft 0.15s linear                |
| animate-fadeoutleft  | fadeoutleft 0.15s linear               |
| animate-fadeinright  | fadeinright 0.15s linear               |
| animate-fadeoutright | fadeoutright 0.15s linear              |
| animate-fadeinup     | fadeinup 0.15s linear                  |
| animate-fadeoutup    | fadeoutup 0.15s linear                 |
| animate-fadeindown   | fadeindown 0.15s linear                |
| animate-fadeoutup    | fadeoutup 0.15s linear                 |
| animate-width        | width 0.15s linear                     |
| animate-flip         | flip 0.15s linear                      |
| animate-flipup       | flipup 0.15s linear                    |
| animate-flipleft     | flipleft 0.15s linear                  |
| animate-flipright    | flipright 0.15s linear                 |
| animate-zoomin       | zoomin 0.15s linear                    |
| animate-zoomindown   | zoomindown 0.15s linear                |
| animate-zoominleft   | zoominleft 0.15s linear                |
| animate-zoominright  | zoominright 0.15s linear               |
| animate-zoominup     | zoominup 0.15s linear                  |

## Variant modifiers and breakpoints

All variants and breakpoints are supported.

```html
<div class="lg:hover:bg-primary lg:hover:animate-fadein motion-reduce:animate-none">
    <!-- ... -->
</div>
```

## Arbitrary values

Any value within the square brackets allow defining one-off values that do not need to be defined as a reusable utility.

```html
<div class="animate-delay-[450ms] animate-duration-[4s]">
    <!-- ... -->
</div>
```

## Customizing the Plugin

The default values can be customized using as a theme extension.

```js
// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            animationDelay: {
                475: '475ms',
                2000: '2s'
            },
            animationDuration: {
                4000: '4s',
                slow: '10s'
            }
        }
    },
    plugins: [require('tailwindcss-primeui')]
};
```
