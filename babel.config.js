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
            '@assets': './src/Assets',
            '@components': './src/Components',
            '@screens': './src/Screens',
            '@storage': './src/Storage',
            '@theme': './src/Theme',
            '@utils': './src/Utils'
          }
        }
      ]
    ]
  };
};
