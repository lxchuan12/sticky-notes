/**
 * @file build/webpack.prod.conf.js
 * @desc webpack 生成环境配置文件
 * @version 1.0.0
 * @author luoxiaochuan <lxchuan12@163.com>
 * @date 2018-06-02
 * @copyright 2018
 */
const path = require('path');
const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const chalk = require('chalk');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin');

const env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : require('../config/prod.env')

const buildWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    module: {
        rules: [{
            test: /\.less$/,
            use: [
                {
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                    // options:{
                    //     minimize: true //css压缩
                    // }
                },
                {
                    loader: 'less-loader'
                },
                {
                    loader: 'postcss-loader',
                }
            ]
        }],
    },
    devtool: config.build.productionSourceMap ? config.build.devtool : false,
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
    },
    plugins: [
        new CleanWebpackPlugin('../dist'),
        new webpack.DefinePlugin({
            'process.env': env
        }),
		// 拆分后会把css文件放到dist目录下的css/style.css
		new ExtractTextWebpackPlugin({
            filename: utils.assetsPath('css/[name].[contenthash].css'),
            allChunks: true,
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: config.build.productionSourceMap
              ? { safe: true, map: { inline: false } }
              : { safe: true }
        }),
        // JS压缩
		new UglifyjsWebpackPlugin({
			uglifyOptions: {
				ie8: false,
				ecma: 8,
				mangle: true,
				output: { comments: false },
				compress: {
					warnings: false,
					drop_debugger: true,
					drop_console: true,
				}
			},
			sourceMap: config.build.productionSourceMap,
			cache: config.build.productionCache,
			parallel: true,
		}),
        new HtmlWebpackPlugin({
			// 配置输出文件名和路径
			filename: process.env.NODE_ENV === 'testing'
                ? 'index.html'
                : config.build.index,
			// 配置文件模板
			template: path.resolve(__dirname, '../src/index.html'),
			hash: true, // 会在打包好的bundle.js后面加上hash串
			favicon: path.resolve(__dirname, '../src/favicon.ico'),
			// HTML 压缩
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true
				// more options:
				// https://github.com/kangax/html-minifier#options-quick-reference
			},
        }),
        // keep module.id stable when vendor modules does not change
        new webpack.HashedModuleIdsPlugin(),
        // enable scope hoisting
        new webpack.optimize.ModuleConcatenationPlugin(),
        new ProgressBarWebpackPlugin({
			format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
			clear: false
        }),
    ],
});

if(config.build.bundleAnalyzerReport){
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}
module.exports = buildWebpackConfig;