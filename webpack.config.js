const path = require('path');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  entry: path.join(__dirname, 'src/main.js'),

  output: {
    chunkFilename: '[name].[chunkhash].js',
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'build'),
  },

  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              spriteFilename: 'sprite.[hash:6].svg',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new SpriteLoaderPlugin(),
  ],
};
