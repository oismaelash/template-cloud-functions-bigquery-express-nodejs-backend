module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@utils': './src/utils',
          '@controllers': './src/controllers',
          '@routes': './src/routes',
          '@interfaces': './src/interfaces',
        }
      }
    ]
  ],
  ignore: ['**/*.spec.ts']
}
