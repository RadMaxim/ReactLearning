// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'

export default [
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        ignores: [
            'node_modules',
            'dist',
            'build',
            'coverage',
            'webpack.config.js'
        ],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                ecmaFeatures: { jsx: true }
            },
            globals: {
                ...globals.browser,
                ...globals.es2021
            }
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            react: pluginReact
        },
        rules: {
            ...js.configs.recommended.rules,
            ...tseslint.configs.recommended.rules,
            ...pluginReact.configs.recommended.rules,
            semi: 'off',
            quotes: 'off',
            'react/react-in-jsx-scope': 'off',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'off', // если используешь TypeScript
        }
    }
]
