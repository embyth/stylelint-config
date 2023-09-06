# :art: `@embyth/stylelint-config`

> Embyth's shareable configuration for [`stylelint`][stylelint-link].

## :wrench: Installation

```bash
# Yarn:
yarn add --dev stylelint prettier @embyth/stylelint-config

# npm:
npm install --save-dev stylelint prettier @embyth/stylelint-config

# pnpm:
pnpm add --save-dev stylelint prettier @embyth/stylelint-config
```

## :eyes: Usage

Add it to your `.stylelintrc` file:

```json
{
  "extends": "@embyth/stylelint-config"
}
```

## :jigsaw: Extending the config

The defined rules can be modified by adding other configurations, plugins or custom rules:

```json
{
  "extends": ["@embyth/stylelint-config", "some-other-config-you-use"],
  "rules": {
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": ["extends", "ignores"]
      }
    ]
  }
}
```

## :thinking: Documentations

Read the [stylelint docs][stylelint-docs-link] for more information.

[stylelint-docs-link]: https://stylelint.io
[stylelint-link]: https://github.com/stylelint/stylelint
