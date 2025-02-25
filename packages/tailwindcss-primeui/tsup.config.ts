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
        clean: true,
        esbuildOptions(options, context) {
            if (context.format === 'cjs') {
                options.footer = {
                    // https://github.com/egoist/tsup/issues/710
                    js: `module.exports = module.exports.default || module.exports;`
                };
            }
        }
    }
]);
