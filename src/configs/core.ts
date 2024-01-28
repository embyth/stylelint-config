import scssSyntax from 'postcss-scss';
// helpers
import { defineConfig } from '../helpers/utilities';
// rules
import { bemRules } from '../rules/bem';
import { generalRules } from '../rules/general';
import { orderRules } from '../rules/order';
import { prettierRules } from '../rules/prettier';
import { scssRules } from '../rules/scss';
import { pluginRules } from '../rules/plugin';

export const coreConfig = defineConfig({
  plugins: [
    'stylelint-prettier',
    'stylelint-selector-bem-pattern',
    'stylelint-order',
    'stylelint-high-performance-animation',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-selector-no-empty',
  ],
  extends: ['stylelint-config-recommended'],
  reportNeedlessDisables: true,
  reportInvalidScopeDisables: true,
  rules: {
    ...generalRules,
    ...bemRules,
    ...orderRules,
    ...prettierRules,
    ...pluginRules,
  },
  overrides: [
    {
      files: ['**/*.scss'],
      plugins: ['stylelint-scss'],
      ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.json'],
      customSyntax: scssSyntax,
      rules: {
        ...scssRules,
      },
    },
  ],
});
