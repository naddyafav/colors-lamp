const js = require("@eslint/js");
module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        alert: "readonly",
        fetch: "readonly",
        XMLHttpRequest: "readonly",
        module: "writable"
      }
    },
    rules: {
      "no-unused-vars": "off",
      "no-undef": "off",
      "no-dupe-keys": "error"
    }
  }
];
