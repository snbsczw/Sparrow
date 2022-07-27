module.exports = {
  testMatch: ['**/__tests__/**/*.spec.js'], // 只测试.spec.js后缀的文件
  runner: 'jest-electron/runner', // 指定测试的runner
  testEnvironment: 'jest-electron/environment', // 指定测试的环境
};
