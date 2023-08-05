module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  extends: [
    '@react-native',
    'airbnb-typescript/base',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
};
