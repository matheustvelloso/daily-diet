module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@screens': './src/screens',
            '@storage': './src/storage',
            '@theme': './src/themes',
            '@utils': './src/utils',
            '@types': './src/types',
            '@hooks': './src/hooks'
          }
        }
      ]
    ]
  };
};
