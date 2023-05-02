"use strict";

const scssRules = require("./rules/scss.js");

module.exports = {
  plugins: ["stylelint-selector-bem-pattern", "stylelint-order"],
  extends: ["./index.js", "stylelint-config-recommended-scss"],
  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.tsx", "**/*.ts", "**/*.json"],
  customSyntax: "postcss-scss",
  rules: {
    ...scssRules,
  },
};
