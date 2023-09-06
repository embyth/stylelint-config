import { defineRules } from '../helpers/utilities';

export const prettierRules = defineRules({
  /**
   * Indicates whether or not the plugin should use prettier to format your CSS.
   * @see https://github.com/prettier/stylelint-prettier
   */
  'prettier/prettier': true,
});
