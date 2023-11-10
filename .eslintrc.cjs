module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended'
    ],
    ignorePatterns: [
        'dist',
        'build',
        '.eslintrc.cjs',
        '*.config.js',
        '*.config.ts',
        'webpack.*.js',
        'webpack.*.ts',
        'src/**/*.test.ts'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ["./tsconfig.json"]
    },
    plugins: [
        '@typescript-eslint',
        'react-refresh'
    ],
    rules: {
        '@typescript-eslint/strict-boolean-expressions': [
            2,
            {
                allowString: false,
                allowNumber: false
            }
        ],
        'react-refresh/only-export-components': [
            'warn',
            {
                allowConstantExport: true
            }
        ]
    }
}
