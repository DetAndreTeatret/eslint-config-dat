module.exports = {
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint",
        "jsdoc"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "rules": {
        "@typescript-eslint/ban-ts-comment": "off",
        "semi": ["warn", "never"],
        "no-duplicate-imports": "error",
        "no-self-compare": "error",
        "no-unreachable-loop": "error",
        "no-unused-private-class-members": "warn",
        "eqeqeq": ["error", "smart"],
        "no-lone-blocks": "error",
        "no-var": "error",
        "spaced-comment": ["warn", "always", {
            "block": {
                "balanced": true
            }
        }],
        "eol-last": "warn",
        "no-trailing-spaces": "warn",
        "quotes": ["warn", "double"], // Template literals are allowed
        "padding-line-between-statements": ["error", // Order is important!
            {"blankLine": "always", "prev": "import", "next": "*"},
            {"blankLine": "never", "prev": "import", "next": "import"},
            {"blankLine": "always", "prev": "*", "next": "function"}, // TODO: how to make this ignore export
            {"blankLine": "always", "prev": "*", "next": "class"}
        ],
        "jsdoc/no-undefined-types": "warn"
    }
}
