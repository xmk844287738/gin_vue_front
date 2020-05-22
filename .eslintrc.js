module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb', // 使用airbnb代码规范
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    // "indent": ["error", 4],
    // "semi": ["error", "always"],
    // "quotes": ["error", "double"],
    "max-len": ["error", {"code": 300}], // ESLint设置一行编码最多不能超过300字符。
    "linebreak-style": [0 ,"error", "windows"], 
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
