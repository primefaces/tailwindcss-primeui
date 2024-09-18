// @ts-check

const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const eslintConfigPrettier = require('eslint-config-prettier');

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = tseslint.config({
    files: ['**/*.ts'],
    extends: [eslint.configs.recommended, ...tseslint.configs.recommended, eslintConfigPrettier]
});
