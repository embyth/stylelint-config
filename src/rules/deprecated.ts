import { defineRules } from '../helpers/utilities';

/**
 * As of its version 15, the stylelint package will slowly deprecate and remove 76 stylistic rules.
 * @see https://stylelint.io/migration-guide/to-15/#deprecated-stylistic-rules
 */
export const deprecatedRules = defineRules({
  /**
   * Specify lowercase or uppercase for hex colors.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/color-hex-case/
   */
  'color-hex-case': null,
  /**
   * Require a newline or disallow whitespace after the commas of functions.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/function-comma-newline-after/
   */
  'function-comma-newline-after': null,
  /**
   * Require a newline or disallow whitespace before the commas of functions.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/function-comma-newline-before/
   */
  'function-comma-newline-before': null,
  /**
   * Require a single space or disallow whitespace after the commas of functions.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/function-comma-space-after/
   */
  'function-comma-space-after': null,
  /**
   * Require a single space or disallow whitespace before the commas of functions.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/function-comma-space-before/
   */
  'function-comma-space-before': null,
  /**
   * Limit the number of adjacent empty lines within functions.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/function-max-empty-lines/
   */
  'function-max-empty-lines': null,
  /**
   * Require a single space or disallow whitespace on the inside of the parentheses of functions.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/function-parentheses-space-inside/
   */
  'function-parentheses-space-inside': null,
  /**
   * Require or disallow whitespace after functions.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/function-whitespace-after/
   */
  'function-whitespace-after': null,
  /**
   * Require or disallow a leading zero for fractional numbers less than 1.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/number-leading-zero/
   */
  'number-leading-zero': null,
  /**
   * Disallow trailing zeros in numbers.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/number-no-trailing-zeros/
   */
  'number-no-trailing-zeros': null,
  /**
   * Specify single or double quotes around strings.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/string-quotes/
   */
  'string-quotes': null,
  /**
   * Specify lowercase or uppercase for units.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/unit-case/
   */
  'unit-case': null,
  /**
   * Require a newline or disallow whitespace after the commas of value lists.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/value-list-comma-newline-after/
   */
  'value-list-comma-newline-after': null,
  /**
   * Require a newline or disallow whitespace before the commas of value lists.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/value-list-comma-newline-before/
   */
  'value-list-comma-newline-before': null,
  /**
   * Require a single space or disallow whitespace after the commas of value lists.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/value-list-comma-space-after/
   */
  'value-list-comma-space-after': null,
  /**
   * Require a single space or disallow whitespace before the commas of value lists.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/value-list-comma-space-before/
   */
  'value-list-comma-space-before': null,
  /**
   * Limit the number of adjacent empty lines within value lists.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/value-list-max-empty-lines/
   */
  'value-list-max-empty-lines': null,
  /**
   * Specify lowercase or uppercase for properties.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/property-case/
   */
  'property-case': null,
  /**
   * Require a single space or disallow whitespace after the bang of declarations.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/declaration-bang-space-after/
   */
  'declaration-bang-space-after': null,
  /**
   * Require a single space or disallow whitespace before the bang of declarations.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/declaration-bang-space-before/
   */
  'declaration-bang-space-before': null,
  /**
   * Require a single space or disallow whitespace after the colon of declarations.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/declaration-colon-space-after/
   */
  'declaration-colon-space-after': null,
  /**
   * Require a single space or disallow whitespace before the colon of declarations.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/declaration-colon-space-before/
   */
  'declaration-colon-space-before': null,
  /**
   * Require a newline or disallow whitespace after the semicolons of declaration blocks.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-after/
   */
  'declaration-block-semicolon-newline-after': null,
  /**
   * Require a newline or disallow whitespace before the semicolons of declaration blocks.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-before/
   */
  'declaration-block-semicolon-newline-before': null,
  /**
   * Require a single space or disallow whitespace after the semicolons of declaration blocks.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-after/
   */
  'declaration-block-semicolon-space-after': null,
  /**
   * Require a single space or disallow whitespace before the semicolons of declaration blocks.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-before/
   */
  'declaration-block-semicolon-space-before': null,
  /**
   * Require or disallow a trailing semicolon within declaration blocks.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon/
   */
  'declaration-block-trailing-semicolon': null,
  /**
   * Require or disallow an empty line before the closing brace of blocks.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/block-closing-brace-empty-line-before/
   */
  'block-closing-brace-empty-line-before': null,
  /**
   * Require a newline or disallow whitespace after the closing brace of blocks.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/block-closing-brace-newline-after/
   */
  'block-closing-brace-newline-after': null,
  /**
   * Require a newline or disallow whitespace before the closing brace of blocks.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/block-closing-brace-newline-before/
   */
  'block-closing-brace-newline-before': null,
  /**
   * Require a single space or disallow whitespace after the closing brace of blocks.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/block-closing-brace-space-after/
   */
  'block-closing-brace-space-after': null,
  /**
   * Require a single space or disallow whitespace before the closing brace of blocks.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/block-closing-brace-space-before/
   */
  'block-closing-brace-space-before': null,
  /**
   * Require a newline after the opening brace of blocks.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/block-opening-brace-newline-after/
   */
  'block-opening-brace-newline-after': null,
  /**
   * Require a single space or disallow whitespace after the opening brace of blocks.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/block-opening-brace-space-after/
   */
  'block-opening-brace-space-after': null,
  /**
   * Require a single space or disallow whitespace before the opening brace of blocks.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/block-opening-brace-space-before/
   */
  'block-opening-brace-space-before': null,
  /**
   * Require a single space or disallow whitespace on the inside of the brackets within
   * attribute selectors.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/selector-attribute-brackets-space-inside/
   */
  'selector-attribute-brackets-space-inside': null,
  /**
   * Require a single space or disallow whitespace after operators within attribute selectors.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/selector-attribute-operator-space-after/
   */
  'selector-attribute-operator-space-after': null,
  /**
   * Require a single space or disallow whitespace before operators within attribute selectors.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/selector-attribute-operator-space-before/
   */
  'selector-attribute-operator-space-before': null,
  /**
   * Require a single space or disallow whitespace after the combinators of selectors.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/selector-combinator-space-after/
   */
  'selector-combinator-space-after': null,
  /**
   * Require a single space or disallow whitespace before the combinators of selectors.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/selector-combinator-space-before/
   */
  'selector-combinator-space-before': null,
  /**
   * Disallow non-space characters for descendant combinators of selectors.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/selector-descendant-combinator-no-non-space/
   */
  'selector-descendant-combinator-no-non-space': null,
  /**
   * Specify lowercase or uppercase for pseudo-class selectors.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/selector-pseudo-class-case/
   */
  'selector-pseudo-class-case': null,
  /**
   * Require a single space or disallow whitespace on the inside of the parentheses
   * within pseudo-class selectors.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/selector-pseudo-class-parentheses-space-inside/
   */
  'selector-pseudo-class-parentheses-space-inside': null,
  /**
   * Specify lowercase or uppercase for pseudo-element selectors.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/selector-pseudo-element-case/
   */
  'selector-pseudo-element-case': null,
  /**
   * Limit the number of adjacent empty lines within selectors.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/selector-max-empty-lines/
   */
  'selector-max-empty-lines': null,
  /**
   * Require a newline or disallow whitespace after the commas of selector lists.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/selector-list-comma-newline-after/
   */
  'selector-list-comma-newline-after': null,
  /**
   * Require a newline or disallow whitespace before the commas of selector lists.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/selector-list-comma-newline-before/
   */
  'selector-list-comma-newline-before': null,
  /**
   * Require a single space or disallow whitespace after the commas of selector lists.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/selector-list-comma-space-after/
   */
  'selector-list-comma-space-after': null,
  /**
   * Require a single space or disallow whitespace before the commas of selector lists.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/selector-list-comma-space-before/
   */
  'selector-list-comma-space-before': null,
  /**
   * Require a single space or disallow whitespace after the colon in media features.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/media-feature-colon-space-after/
   */
  'media-feature-colon-space-after': null,
  /**
   * Require a single space or disallow whitespace before the colon in media features.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/media-feature-colon-space-before/
   */
  'media-feature-colon-space-before': null,
  /**
   * Specify lowercase or uppercase for media feature names.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/media-feature-name-case/
   */
  'media-feature-name-case': null,
  /**
   * Require a single space or disallow whitespace on the inside of the parentheses
   * within media features.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/media-feature-parentheses-space-inside/
   */
  'media-feature-parentheses-space-inside': null,
  /**
   * Require a single space or disallow whitespace after the range operator in media features.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/media-feature-range-operator-space-after/
   */
  'media-feature-range-operator-space-after': null,
  /**
   * Require a single space or disallow whitespace before the range operator in media features.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/media-feature-range-operator-space-before/
   */
  'media-feature-range-operator-space-before': null,
  /**
   * Require a newline or disallow whitespace after the commas of media query lists.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/media-query-list-comma-newline-after/
   */
  'media-query-list-comma-newline-after': null,
  /**
   * Require a newline or disallow whitespace before the commas of media query lists.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/media-query-list-comma-newline-before/
   */
  'media-query-list-comma-newline-before': null,
  /**
   * Require a single space or disallow whitespace after the commas of media query lists.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/media-query-list-comma-space-after/
   */
  'media-query-list-comma-space-after': null,
  /**
   * Require a single space or disallow whitespace before the commas of media query lists.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/media-query-list-comma-space-before/
   */
  'media-query-list-comma-space-before': null,
  /**
   * Specify lowercase or uppercase for at-rules names.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/at-rule-name-case/
   */
  'at-rule-name-case': null,
  /**
   * Require a single space after at-rule names.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/at-rule-name-space-after/
   */
  'at-rule-name-space-after': null,
  /**
   * Require a newline after the semicolon of at-rules.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/at-rule-semicolon-newline-after/
   */
  'at-rule-semicolon-newline-after': null,
  /**
   * Specify indentation.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/indentation/
   */
  indentation: null,
  /**
   * Limit the number of adjacent empty lines.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/max-empty-lines/
   */
  'max-empty-lines': null,
  /**
   * Disallow end-of-line whitespace.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/no-eol-whitespace/
   */
  'no-eol-whitespace': null,
  /**
   * Disallow missing end-of-source newlines.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/no-missing-end-of-source-newline/
   */
  'no-missing-end-of-source-newline': null,
});
