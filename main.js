export default [
    {
        parser: "@typescript-eslint/parser",
        plugins: [
            "@typescript-eslint",
            "jsdoc",
            "@stylistic"
        ],
        extends: [
            "eslint:recommended",
            "plugin:@typescript-eslint/eslint-recommended",
            "plugin:@typescript-eslint/recommended"
        ],
        rules: {
            // CODE
            "@typescript-eslint/ban-ts-comment": "off",
            "no-duplicate-imports": "error",
            "no-self-compare": "error",
            "no-unreachable-loop": "error",
            "no-unused-private-class-members": "warn",
            "eqeqeq": ["error", "smart"],
            "no-lone-blocks": "error",
            "no-var": "error",
            "eol-last": "warn",

            // CODE STYLE
            "@stylistic/semi": ["warn", "never"],
            "@stylistic/spaced-comment": ["warn", "always", {
                "block": {
                    "balanced": true
                }
            }],
            "@stylistic/no-trailing-spaces": "warn",
            "@stylistic/keyword-spacing": "error",
            "@stylistic/padding-line-between-statements": ["error", // Order is important!
                {"blankLine": "always", "prev": "import", "next": "*"},
                {"blankLine": "never", "prev": "import", "next": "import"},
                {"blankLine": "always", "prev": "*", "next": "function"}, // TODO: how to make this ignore export
                {"blankLine": "always", "prev": "*", "next": "class"}
            ],
            "@stylistic/quotes": ["warn", "double"], // Template literals are allowed,

            // JSDOC
            "jsdoc/no-undefined-types": "warn"
        }
    }
]
