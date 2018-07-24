module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
        "node": true,
        "jest": true
    },
    "rules": {
        "react/jsx-filename-extension": [1, {
            "extensions": [".js", ".jsx"]
        }],
        "jsx-a11y/label-has-for": [ 2, {
            "required": {
                "some": [ "nesting", "id" ]
            },
        }],
        "react/require-default-props": [0, { forbidDefaultForRequired: 0}]
    }
};