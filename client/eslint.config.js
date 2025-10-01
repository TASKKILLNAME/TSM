// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*', 'node_modules/*', '.expo/*', 'web-build/*'],
  },
  {
    rules: {
      // Airbnb 스타일 규칙 추가
      'indent': ['error', 2],
      'linebreak-style': ['error', 'windows'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'no-console': 'off',
      'comma-dangle': ['error', 'always-multiline'],
      'arrow-parens': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      
      // React Native 관련
      'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
      'react/prop-types': 'off',
      'react/style-prop-object': 'off',
      'no-use-before-define': 'off',
      'global-require': 'off',
    },
  },
]);