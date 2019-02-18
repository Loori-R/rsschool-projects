const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const config = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'build.js',
    path: path.join(__dirname, '/dist'),
    libraryTarget: 'var',
    library: 'XLSX'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    overlay: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(xlsx)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
    noParse: [
      /xlsx.core.min.js/,
      /xlsx.full.min.js/
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: path.join(__dirname, '/src/index.html'),
      favicon: path.join(__dirname, '/src/favicon.png'),
    }),
    new ExtractTextPlugin('style.css'),
    new webpack.ProvidePlugin({
      _: 'lodash',
    }),
  ],
  node: {
    Buffer: false,
    fs: "empty"
  }
};

module.exports = (env, options) => {
  if (options.mode === 'production') {
    config.devtool = 'source-map';
  } else {
    config.devtool = 'eval';
  }

  return config;
};
