/**
 * @type {import('eslint/lib/shared/types').ConfigData}
 */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      env: {
        commonjs: false,
        es2020: false
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript'
      ],
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        warnOnUnsupportedTypeScriptVersion: false
      }
    },
    {
      extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:import/react'
      ],
      files: ['*.jsx', '*.tsx'],
      rules: {
        'react/jsx-sort-props': 'error'
      },
      settings: {
        react: {
          version: 'detect'
        }
      }
    },
    {
      files: ['*.tsx'],
      rules: {
        'react/prop-types': 'off'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  root: true,
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        bundledDependencies: false,
        devDependencies: ['next.config.js', 'tailwind.config.js'],
        optionalDependencies: false,
        peerDependencies: false
      }
    ],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc'
        },
        groups: [
          ['builtin', 'external'],
          'internal',
          'parent',
          'sibling',
          'index',
          'type'
        ]
      }
    ],
    'sort-keys': 'error'
  }
}
