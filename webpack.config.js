const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
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
	],
};
