import { defineConfig } from '../helpers/utilities';
import { scssRules } from '../rules/scss';

export const scssConfig = defineConfig({
  plugins: ['stylelint-selector-bem-pattern', 'stylelint-order'],
  extends: ['@embyth/stylelint-config', 'stylelint-config-recommended-scss'],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
  ],
  customSyntax: 'postcss-scss',
  rules: {
    ...scssRules,
  },
});
