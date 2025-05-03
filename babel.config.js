module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@babel/plugin-transform-export-namespace-from',
      [
        'module-resolver',
        {
          alias: {
            '@': './src',
          },
        },
      ],
      'react-native-reanimated/plugin' // sempre deve ser o último!
    ]
  };
};
