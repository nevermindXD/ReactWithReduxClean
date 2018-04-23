const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: 'index.html',
	inject: 'body'
})

// const ExtractTextPluginConfig = new ExtractTextPlugin({
// 	filename: 'bundle.css',
// 	allChunks: true
// })


module.exports = {
	entry: [
		'react-hot-loader/patch',
		'./src/index.js'
	],
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true }
					}
				]
			},
			{
				test: /\.(s*).css?$/,
				use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] }),
				exclude: /node_modules/
			},
		]
	},
	plugins: [
		HtmlWebpackPluginConfig,
		new ExtractTextPlugin('styles.css'),
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	devServer: {
		inline: true,
		contentBase: './src',
		hot: true,
		port: 3000
	}
}