module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'plugin:react/recommended',
    'react-app/jest',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'react-hooks', 'import'],
  rules: {
    'jsx-a11y/href-no-hash': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'react/require-default-props': [
      0,
      { forbidDefaultForRequired: true, ignoreFunctionalComponents: true },
    ],
    'import/prefer-default-export': 0,
    'multiline-ternary': 0,
    'no-shadow': 0,
    'import/order': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 'error',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'react/prop-types': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'max-len': [
      'warn',
      {
        code: 100,
        tabWidth: 2,
        comments: 80,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'additional-typescript-only-rule': 0,
    'no-undef': 0,
  },
  settings: {
    version: 'detect',
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'additional-typescript-only-rule': 0,
      },
    },
  ],
};
