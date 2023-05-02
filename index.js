"use strict";

const generalRules = require("./rules/general.js");
const deprecatedRules = require("./rules/deprecated.js");
const bemRules = require("./rules/bem.js");
const orderRules = require("./rules/order.js");

module.exports = {
  plugins: ["stylelint-selector-bem-pattern", "stylelint-order"],
  extends: ["stylelint-config-recommended"],
  rules: {
    ...generalRules,
    // When we will bump stylelint to the next major version this rules will be removed, so we need to add them to the stylistic plugin and add "stylelint-stylistic" to the plugins array
    ...deprecatedRules,
    ...bemRules,
    ...orderRules,
  },
};
