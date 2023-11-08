module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    ignorePatterns: [
        'dist',
        '.eslintrc.cjs',
        '*.config.js',
        '*.config.ts',
        'src/**/*.test.ts'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ["./tsconfig.json"]
    },
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
        '@typescript-eslint/strict-boolean-expressions': [
            2,
            {
                allowString: false,
                allowNumber: false
            }
        ]
    }
}
