const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const conf = {
  entry: './src/js/index.js',

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[hash].js',
    clean: true,
  },

  devServer: {
    static: './dist',
  },

  optimization: {
    runtimeChunk: 'single',
  },

  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Virtual keyboard',
      filename: 'index.html',
      template: 'src/index.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
};

module.exports = conf;
