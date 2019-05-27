
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
	devtool: 'source-map',
	entry: './src/index.tsx',
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	output: {
		path: `${__dirname}/build`,
		filename: '[name]-[hash].js'
	},
	module: {
		rules: [
			{ test: /\.tsx?$/, exclude: /\.test.tsx?$/, include: /ClientApp/, use: 'awesome-typescript-loader?silent=true' },
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader'
			},
			{
				test: /\.(png|svg|jpg|gif|pdf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'sass-loader'
				],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/assets/index.template.html'
		})
	]
};
