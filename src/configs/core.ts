import scssSyntax from 'postcss-scss';

// helpers
import { defineConfig } from '../helpers/utilities';

// rules
import { bemRules } from '../rules/bem';
import { deprecatedRules } from '../rules/deprecated';
import { generalRules } from '../rules/general';
import { orderRules } from '../rules/order';
import { prettierRules } from '../rules/prettier';
import { scssRules } from '../rules/scss';

export const coreConfig = defineConfig({
  plugins: [
    'stylelint-prettier',
    'stylelint-selector-bem-pattern',
    'stylelint-order',
  ],
  extends: ['stylelint-config-recommended'],
  reportNeedlessDisables: true,
  reportInvalidScopeDisables: true,
  rules: {
    ...generalRules,
    ...deprecatedRules,
    ...bemRules,
    ...orderRules,
    ...prettierRules,
  },
  overrides: [
    {
      files: ['**/*.scss'],
      plugins: ['stylelint-scss'],
      ignoreFiles: [
        '**/*.js',
        '**/*.jsx',
        '**/*.tsx',
        '**/*.ts',
        '**/*.json',
      ],
      customSyntax: scssSyntax,
      rules: {
        ...scssRules,
      },
    },
  ],
});
