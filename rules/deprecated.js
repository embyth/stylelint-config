"use strict";

/**
 * As of its version 15, the stylelint package will slowly deprecate and remove 76 stylistic rules.
 * @see https://stylelint.io/migration-guide/to-15/#deprecated-stylistic-rules
 */
module.exports = {
  /**
   * Specify lowercase or uppercase for hex colors.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/color-hex-case/
   */
  "color-hex-case": "lower",
  /**
   * Require a newline or disallow whitespace after the commas of functions.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/function-comma-newline-after/
   */
  "function-comma-newline-after": "always-multi-line",
  /**
   * Require a newline or disallow whitespace before the commas of functions.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/function-comma-newline-before/
   */
  "function-comma-newline-before": "never-multi-line",
  /**
   * Require a single space or disallow whitespace after the commas of functions.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/function-comma-space-after/
   */
  "function-comma-space-after": "always-single-line",
  /**
   * Require a single space or disallow whitespace before the commas of functions.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/function-comma-space-before/
   */
  "function-comma-space-before": "never",
  /**
   * Limit the number of adjacent empty lines within functions.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/function-max-empty-lines/
   */
  "function-max-empty-lines": 0,
  /**
   * Require a single space or disallow whitespace on the inside of the parentheses of functions.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/function-parentheses-space-inside/
   */
  "function-parentheses-space-inside": "never-single-line",
  /**
   * Require or disallow whitespace after functions.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/function-whitespace-after/
   */
  "function-whitespace-after": "always",
  /**
   * Require or disallow a leading zero for fractional numbers less than 1.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/number-leading-zero/
   */
  "number-leading-zero": "always",
  /**
   * Disallow trailing zeros in numbers.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/number-no-trailing-zeros/
   */
  "number-no-trailing-zeros": true,
  /**
   * Specify single or double quotes around strings.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/string-quotes/
   */
  "string-quotes": "double",
  /**
   * Specify lowercase or uppercase for units.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/unit-case/
   */
  "unit-case": "lower",
  /**
   * Require a newline or disallow whitespace after the commas of value lists.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/value-list-comma-newline-after/
   */
  "value-list-comma-newline-after": "always-multi-line",
  /**
   * Require a newline or disallow whitespace before the commas of value lists.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/value-list-comma-newline-before/
   */
  "value-list-comma-newline-before": "never-multi-line",
  /**
   * Require a single space or disallow whitespace after the commas of value lists.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/value-list-comma-space-after/
   */
  "value-list-comma-space-after": "always-single-line",
  /**
   * Require a single space or disallow whitespace before the commas of value lists.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/value-list-comma-space-before/
   */
  "value-list-comma-space-before": "never",
  /**
   * Limit the number of adjacent empty lines within value lists.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/value-list-max-empty-lines/
   */
  "value-list-max-empty-lines": 0,
  /**
   * Specify lowercase or uppercase for properties.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/property-case/
   */
  "property-case": "lower",
  /**
   * Require a single space or disallow whitespace after the bang of declarations.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/declaration-bang-space-after/
   */
  "declaration-bang-space-after": "never",
  /**
   * Require a single space or disallow whitespace before the bang of declarations.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/declaration-bang-space-before/
   */
  "declaration-bang-space-before": "always",
  /**
   * Require a single space or disallow whitespace after the colon of declarations.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/declaration-colon-space-after/
   */
  "declaration-colon-space-after": "always-single-line",
  /**
   * Require a single space or disallow whitespace before the colon of declarations.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/declaration-colon-space-before/
   */
  "declaration-colon-space-before": "never",
  /**
   * Require a newline or disallow whitespace after the semicolons of declaration blocks.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-after/
   */
  "declaration-block-semicolon-newline-after": "always",
  /**
   * Require a newline or disallow whitespace before the semicolons of declaration blocks.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-before/
   */
  "declaration-block-semicolon-newline-before": "never-multi-line",
  /**
   * Require a single space or disallow whitespace after the semicolons of declaration blocks.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-after/
   */
  "declaration-block-semicolon-space-after": "always-single-line",
  /**
   * Require a single space or disallow whitespace before the semicolons of declaration blocks.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-before/
   */
  "declaration-block-semicolon-space-before": "never",
  /**
   * Require or disallow a trailing semicolon within declaration blocks.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon/
   */
  "declaration-block-trailing-semicolon": "always",
  /**
   * Require or disallow an empty line before the closing brace of blocks.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/block-closing-brace-empty-line-before/
   */
  "block-closing-brace-empty-line-before": "never",
  /**
   * Require a newline or disallow whitespace after the closing brace of blocks.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/block-closing-brace-newline-after/
   */
  "block-closing-brace-newline-after": "always",
  /**
   * Require a newline or disallow whitespace before the closing brace of blocks.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/block-closing-brace-newline-before/
   */
  "block-closing-brace-newline-before": "always",
  /**
   * Require a single space or disallow whitespace after the closing brace of blocks.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/block-closing-brace-space-after/
   */
  "block-closing-brace-space-after": "always-single-line",
  /**
   * Require a single space or disallow whitespace before the closing brace of blocks.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/block-closing-brace-space-before/
   */
  "block-closing-brace-space-before": "always-single-line",
  /**
   * Require a newline after the opening brace of blocks.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/block-opening-brace-newline-after/
   */
  "block-opening-brace-newline-after": "always",
  /**
   * Require a single space or disallow whitespace after the opening brace of blocks.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/block-opening-brace-space-after/
   */
  "block-opening-brace-space-after": "always-single-line",
  /**
   * Require a single space or disallow whitespace before the opening brace of blocks.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/block-opening-brace-space-before/
   */
  "block-opening-brace-space-before": "always",
  /**
   * Require a single space or disallow whitespace on the inside of the brackets within attribute selectors.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/selector-attribute-brackets-space-inside/
   */
  "selector-attribute-brackets-space-inside": "never",
  /**
   * Require a single space or disallow whitespace after operators within attribute selectors.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/selector-attribute-operator-space-after/
   */
  "selector-attribute-operator-space-after": "never",
  /**
   * Require a single space or disallow whitespace before operators within attribute selectors.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/selector-attribute-operator-space-before/
   */
  "selector-attribute-operator-space-before": "never",
  /**
   * Require a single space or disallow whitespace after the combinators of selectors.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/selector-combinator-space-after/
   */
  "selector-combinator-space-after": "always",
  /**
   * Require a single space or disallow whitespace before the combinators of selectors.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/selector-combinator-space-before/
   */
  "selector-combinator-space-before": "always",
  /**
   * Disallow non-space characters for descendant combinators of selectors.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/selector-descendant-combinator-no-non-space/
   */
  "selector-descendant-combinator-no-non-space": true,
  /**
   * Specify lowercase or uppercase for pseudo-class selectors.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/selector-pseudo-class-case/
   */
  "selector-pseudo-class-case": "lower",
  /**
   * Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/selector-pseudo-class-parentheses-space-inside/
   */
  "selector-pseudo-class-parentheses-space-inside": "never",
  /**
   * Specify lowercase or uppercase for pseudo-element selectors.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/selector-pseudo-element-case/
   */
  "selector-pseudo-element-case": "lower",
  /**
   * Limit the number of adjacent empty lines within selectors.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/selector-max-empty-lines/
   */
  "selector-max-empty-lines": 0,
  /**
   * Require a newline or disallow whitespace after the commas of selector lists.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/selector-list-comma-newline-after/
   */
  "selector-list-comma-newline-after": "always",
  /**
   * Require a newline or disallow whitespace before the commas of selector lists.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/selector-list-comma-newline-before/
   */
  "selector-list-comma-newline-before": "never-multi-line",
  /**
   * Require a single space or disallow whitespace after the commas of selector lists.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/selector-list-comma-space-after/
   */
  "selector-list-comma-space-after": "always-single-line",
  /**
   * Require a single space or disallow whitespace before the commas of selector lists.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/selector-list-comma-space-before/
   */
  "selector-list-comma-space-before": "never",
  /**
   * Require a single space or disallow whitespace after the colon in media features.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/media-feature-colon-space-after/
   */
  "media-feature-colon-space-after": "always",
  /**
   * Require a single space or disallow whitespace before the colon in media features.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/media-feature-colon-space-before/
   */
  "media-feature-colon-space-before": "never",
  /**
   * Specify lowercase or uppercase for media feature names.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/media-feature-name-case/
   */
  "media-feature-name-case": "lower",
  /**
   * Require a single space or disallow whitespace on the inside of the parentheses within media features.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/media-feature-parentheses-space-inside/
   */
  "media-feature-parentheses-space-inside": "never",
  /**
   * Require a single space or disallow whitespace after the range operator in media features.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/media-feature-range-operator-space-after/
   */
  "media-feature-range-operator-space-after": "always",
  /**
   * Require a single space or disallow whitespace before the range operator in media features.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/media-feature-range-operator-space-before/
   */
  "media-feature-range-operator-space-before": "always",
  /**
   * Require a newline or disallow whitespace after the commas of media query lists.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/media-query-list-comma-newline-after/
   */
  "media-query-list-comma-newline-after": "always-multi-line",
  /**
   * Require a newline or disallow whitespace before the commas of media query lists.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/media-query-list-comma-newline-before/
   */
  "media-query-list-comma-newline-before": "never-multi-line",
  /**
   * Require a single space or disallow whitespace after the commas of media query lists.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/media-query-list-comma-space-after/
   */
  "media-query-list-comma-space-after": "always-single-line",
  /**
   * Require a single space or disallow whitespace before the commas of media query lists.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/media-query-list-comma-space-before/
   */
  "media-query-list-comma-space-before": "never-single-line",
  /**
   * Specify lowercase or uppercase for at-rules names.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/at-rule-name-case/
   */
  "at-rule-name-case": "lower",
  /**
   * Require a single space after at-rule names.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/at-rule-name-space-after/
   */
  "at-rule-name-space-after": "always",
  /**
   * Require a newline after the semicolon of at-rules.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/at-rule-semicolon-newline-after/
   */
  "at-rule-semicolon-newline-after": "always",
  /**
   * Specify indentation.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/indentation/
   */
  indentation: 2,
  /**
   * Limit the number of adjacent empty lines.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/max-empty-lines/
   */
  "max-empty-lines": 1,
  /**
   * Disallow end-of-line whitespace.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/no-eol-whitespace/
   */
  "no-eol-whitespace": true,
  /**
   * Disallow missing end-of-source newlines.
   * @deprecated This rule is deprecated and will be removed in the future.
   * @link https://stylelint.io/user-guide/rules/no-missing-end-of-source-newline/
   */
  "no-missing-end-of-source-newline": true,
};
