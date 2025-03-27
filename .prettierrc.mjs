export default {
  useTabs: false,
  singleQuote: true,
  trailingComma: 'none',
  // "printWidth": 100,
  plugins: [
    'prettier-plugin-svelte',
  ],
  overrides: [
    {
      files: '*.svelte',
      options: {
        parser: 'svelte',
      },
    },
  ],
}
