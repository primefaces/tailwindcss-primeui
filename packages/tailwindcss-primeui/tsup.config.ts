import { defineConfig } from 'tsup';

export default defineConfig([
    {
        entry: {
            'v3/index': 'src/v3/index.ts'
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
