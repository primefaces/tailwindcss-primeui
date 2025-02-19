import { defineConfig } from 'tsup';

export default defineConfig([
    {
        entry: {
            'js/index': 'src/js/index.ts'
        },
        format: ['esm', 'cjs', 'iife'],
        outDir: 'dist',
        dts: true,
        external: [/^tailwindcss\/(.*)$/],
        minify: true,
        sourcemap: true,
        splitting: false,
        clean: true
    }
]);
