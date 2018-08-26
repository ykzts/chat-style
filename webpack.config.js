const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');
const SubresourceIntegrityPlugin = require('webpack-subresource-integrity');
const WorkboxPlugin = require('workbox-webpack-plugin');

const env = process.env.NODE_ENV || 'development';

module.exports = {
  mode: env !== 'production' ? 'development' : 'production',
  module: {
    rules: [
      {
        exclude: /\/node_modules\//,
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader/useable',
          'css-loader',
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: env !== 'production' ? '[name].[ext]?[hash]' : '[name].[hash].[ext]',
            },
          },
          'extract-loader',
          'html-loader',
        ],
      },
      {
        test: /\.png$/,
        loader: 'file-loader',
        options: {
          name: env !== 'production' ? '[name].[ext]?[hash]' : '[name].[hash].[ext]',
          outputPath: './images/',
          publicPath: '/images/',
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
  output: {
    crossOriginLoading: 'anonymous',
    filename: env !== 'production' ? '[name].js?[hash]' : '[name].[chunkhash].js',
    publicPath: '/',
  },
  plugins: [
    new HtmlPlugin({
      inject: false,
      template: path.resolve(__dirname, 'src', 'templates'),
    }),
    ...(env === 'production' ? [
      new CopyPlugin([
        path.resolve(__dirname, 'public', '_headers'),
        path.resolve(__dirname, 'public', 'manifest.json'),
        path.resolve(__dirname, 'public', 'favicon.ico'),
        ...[
          48,
          72,
          96,
          144,
          168,
          192,
        ].map(size => path.resolve(__dirname, 'public', `favicon-${size}x${size}.png`)),
      ]),
      new SubresourceIntegrityPlugin({
        hashFuncNames: ['sha512'],
      }),
      new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        exclude: [
          /\.map$/,
          /^_headers$/,
        ],
        importWorkboxFrom: 'local',
        runtimeCaching: [
          {
            handler: 'staleWhileRevalidate',
            options: {
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
            urlPattern: /^https:\/\/(?:fonts\.googleapis\.com|fonts\.gstatic\.com)\//i,
          },
        ],
        skipWaiting: true,
        swDest: 'sw.js',
      }),
    ] : []),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  serve: {
    content: path.resolve(__dirname, 'public'),
  },
};
