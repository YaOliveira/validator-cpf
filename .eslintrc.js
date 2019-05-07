module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "indent": [
            'error',
            2,
            { "SwitchCase": 1 }
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "keyword-spacing": [
            "error",
            { "after": true }
        ],
        "space-infix-ops": [
            "error",
            { "int32Hint": false }
        ],
        "id-length": 2,
        "camelcase": ["error", { properties: "always" }
        ],
        'comma-spacing': [
            'error', {
                'before': false,
                'after': true
            }
        ],
        'space-before-blocks': 2,
        'spaced-comment': [
            'error',
            'always'
        ],
        'key-spacing': [
            'error', {
                'beforeColon': true
            }
        ],
        'no-multi-spaces': [
            'error', {
                'ignoreEOLComments': false
            }
        ],
        'space-in-parens': [
            'error',
            'never'
        ],
        'space-before-function-paren': [
            'error',
            'never'
        ],
        'func-call-spacing': [
            'error',
            'never'
        ],
        'no-multiple-empty-lines': [
            'error', {
                'max': 1,
                'maxBOF': 1
            }
        ],
        'padded-blocks': [
            'error',
            'never'
        ],
        'no-floating-decimal': 2,
        'object-property-newline': 2,
        'brace-style': 2,
        'eqeqeq': [
            'error',
            'always'
        ],
        'no-array-constructor': 2,
    }
};

