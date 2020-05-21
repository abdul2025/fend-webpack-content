const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin;

module.exports = {
	mode: 'development',
	entry: './src/client/index.js',
	module: {
		rules: [
			{
				test: '/.js$/', // any file ends with .js
				exclude: /node_modules/, // except node files
				loader: 'babel-loader', // loed the babel
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[contenthash].[ext]',
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/client/views/index.html',
			filename: './index.html',
		}),
		new CleanWebpackPlugin({
			// Simulate the removal of files
			dry: true,
			// Write Logs to Console
			verbose: true,
			// Automatically remove all unused webpack assets on rebuild
			cleanStaleWebpackAssets: true, // unused webpack assets
			protectWebpackAssets: false, // product webpack assets
		}),
		new BundleAnalyzerPlugin(),
	],
};
