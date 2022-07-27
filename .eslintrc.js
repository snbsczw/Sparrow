module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    // 支持测试环境
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 0,
  },
};
