/* eslint-disable prettier/prettier */
module.exports = {
  extends: ['universe', 'universe/shared/typescript-analysis', 'plugin:react-hooks/recommended', 'plugin:testing-library/react', 'plugin:jest-dom/recommended'],
  overrides: [
    {
      files: ['*ts', '*tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json'
      }
    }
  ],
  settings: {
    'import/resolver':{
        typescript: {}
    }
  },

  globals: {
    __dirname: true
  },
  rules: {
    'no-console': "error"
  },
  plugins: ['jest', 'testing-library']
}
