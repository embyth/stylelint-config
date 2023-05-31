import { defineConfig } from '../helpers/utilities';
import { bemRules } from '../rules/bem';
import { deprecatedRules } from '../rules/deprecated';
import { generalRules } from '../rules/general';
import { orderRules } from '../rules/order';

export const coreConfig = defineConfig({
  plugins: ['stylelint-selector-bem-pattern', 'stylelint-order'],
  extends: ['stylelint-config-recommended'],
  rules: {
    ...generalRules,
    /**
     * When we will bump stylelint to the next major version this rules will be removed,
     * so we need to add them to the stylistic plugin
     * and add "stylelint-stylistic" to the plugins array
    */
    ...deprecatedRules,
    ...bemRules,
    ...orderRules,
  },
});
