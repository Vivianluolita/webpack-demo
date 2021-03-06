'use strict'
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },
  // 知识点1： 
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_[chunkhash:8].js'
  },
  mode: 'production',
  module: {
    rules: [{
      test: /.js$/,
      use: "babel-loader"

    },
    {
      test: /.css$/,
      use: [
        // 'style-loader',
        MiniCssExtractPlugin.loader,
        'css-loader'
      ]
    },
    {
      test: /.less$/,
      use: [
        // 'style-loader',
        MiniCssExtractPlugin.loader,
        'css-loader',
        'less-loader'
      ]
    },
    {
      test: /.(png|jpg|gif|jpeg)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name]_[hash:8].[ext]'
        }
      }

    },
    {
      test: /.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name]_[hash:8][ext]'
        }
      }

    },

      // {
      //   test: /.(png|jpg|gif|jpeg)$/,
      //   use: [{
      //     loader: 'url-loader',
      //     options: {
      //       limit: 10 * 1024
      //     }
      //   }]

      // },
      // {
      //   test: /.(woff|woff2|eot|ttf|otf)$/,
      //   use: 'file-loader'
      // }
    ]

  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css'
    }),
    new OptimizeCssAssetsWebpackPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano')
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/search.html'),
      filename: 'search.[hash:8].html',
      chunks: ['search'],
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      filename: 'index.html',
      chunks: ['index'],
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false
      }
    })
  ]
}