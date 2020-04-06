module.exports = {
  "env": {
    "es6": true,
    "commonjs": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 9,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": ["airbnb", "prettier","prettier/react"],
  "plugins": [
    "react",
  ],
  "rules": {
    "spaced-comment": 0,
    "no-underscore-dangle": 0,
    "trailing-comma": 0,
    "no-use-before-define": 0
  },
  "globals": {
    "describe": true,
    "it": true,
    "expect": true,
    "require": true,
    "window": true,
    "document": true,
    "console": true
  },
};
