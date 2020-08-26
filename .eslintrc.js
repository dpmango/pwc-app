module.exports = {
  extends: ['eslint:recommended', 'plugin:vue/base'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  root: true,
  rules: {
    'no-console': 0,
  },
}
