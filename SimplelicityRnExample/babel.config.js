module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
        alias: {
          '@components': './src/components',
          '@lib': './src/lib',
          '@locales': './src/locales',
          '@navigation': './src/navigation',
          '@assets': './src/assets',
          '@style': './src/style',
          '@enums': './src/enums',
          '@api': './src/api'
        }
      }
    ]
  ]
}
