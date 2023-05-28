module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    './.eslintrc.js',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: [
    '**/*.config.js',
    '**/*.config.ts',
    '**/*.html',
    '**/setupTests.js',
    '**/setupTests.ts',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    "react/jsx-no-constructed-context-values": "off",
    "import/no-extraneous-dependencies": "off",
    "no-plusplus": ["off"],
    'no-shadow': 'off', // TS já faz isso
    'no-undef': 'off', // TS já faz isso
    '@typescript-eslint/no-explicit-any': 'off',
    "@typescript-eslint/default-param-last": "off",
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [1, { ignoreRestSiblings: true }], // Para evitar 2 warnings de variáveis não usadas
    'no-redeclare': 'off', // serve para function overloading no TS uso aqui: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-redeclare.md
    '@typescript-eslint/no-redeclare': [1, { ignoreDeclarationMerge: true }],
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'import/extensions': 'off',
    "import/no-unresolved": [2, { "caseSensitiveStrict": true }]
  },
};
