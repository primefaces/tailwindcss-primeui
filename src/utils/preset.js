module.exports = ({ addUtilities }) =>
    addUtilities({
        '.border-surface': {
            'border-color': 'var(--p-content-border-color)'
        },
        '.bg-emphasis': {
            background: 'var(--p-content-hover-background)',
            color: 'var(--p-content-hover-color)'
        },
        '.bg-highlight': {
            background: 'var(--p-highlight-background)',
            color: 'var(--p-highlight-color)'
        },
        '.bg-highlight-emphasis': {
            background: 'var(--p-highlight-focus-background)',
            color: 'var(--p-highlight-focus-color)'
        },
        '.rounded-border': {
            'border-radius': 'var(--p-content-border-radius)'
        },
        '.text-color': {
            color: 'var(--p-text-color)'
        },
        '.text-color-emphasis': {
            color: 'var(--p-text-hover-color)'
        },
        '.text-muted-color': {
            color: 'var(--p-text-muted-color)'
        },
        '.text-muted-color-emphasis': {
            color: 'var(--p-text-hover-muted-color)'
        }
    });
