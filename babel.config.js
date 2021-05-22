module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@screens': './src/app/screens',
          '@navigation': './src/app/navigation',
          '@utils': './src/app/utils',
          '@stores': './src/app/stores',
          '@reducers': './src/app/redux/reducers',
          '@environments': './src/environments',
          '@components': './src/app/components',
          '@images': './src/assets/images',
          '@shared': './src/app/shared',
          '@theme': './src/app/theme',
        },
      },
    ],
  ],
};
