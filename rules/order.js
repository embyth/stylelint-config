"use strict";

const propertiesOrder = require("../properties-order.js");

module.exports = {
  /**
   * Specify the order of content within declaration blocks.
   * @link https://github.com/hudochenkov/stylelint-order/tree/master/rules/order
   */
  "order/order": [
    [
      "dollar-variables",
      "custom-properties",
      "at-rules",
      "declarations",
      {
        type: "at-rule",
        name: "supports",
      },
      {
        type: "at-rule",
        name: "media",
      },
      "rules",
    ],
    { severity: "warning" },
  ],
  /**
   * Specify the order of properties within declaration blocks.
   * @link https://github.com/hudochenkov/stylelint-order/tree/master/rules/properties-order
   */
  "order/properties-order": propertiesOrder,
};
