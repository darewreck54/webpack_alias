let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ManifestPlugin = require('webpack-manifest-plugin');
const fs = require('fs');
let basePath = __dirname;
//var TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const ROOT_DIR = path.resolve(__dirname, "./");
console.log(ROOT_DIR);

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, '.'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    
    alias: {
     // "common": path.resolve(ROOT_DIR, "common/src"),
      "@entity1": path.resolve(__dirname, "entity1/src"),
     // "entity2/*": path.resolve(__dirname, "entity2/src/*")
    },
    plugins: [new TsconfigPathsPlugin({ configFile: path.resolve(ROOT_DIR,'tsconfig.json') })]
      
    
  },
  entry: {
    entity1: path.join(ROOT_DIR, 'entity1','src','main.tsx'),
    entity2: path.join(ROOT_DIR, 'entity2','src','main.tsx')
  },
  output: {
    path: path.join(basePath, 'dist'),
    filename: '[name]_bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist', // Content base
    inline: true, // Enable watch and live reload
    host: 'localhost',
    port: 8080,
    stats: 'errors-only'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true 
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/img/[name].[ext]?[hash]'
        }
      },
    ],
  },
  plugins: [
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: path.join(ROOT_DIR, 'entity2','src','index.html'), //Name of template in ./src
      hash: true,
      chunks: ['entity2']
    }),
  ],
};