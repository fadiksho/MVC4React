const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const outPutPath = path.resolve(__dirname, 'build');
module.exports = {
	mode: 'none',
	entry: {
		app: path.join(__dirname, 'App', 'src', 'index.tsx')
	},
	target: 'web',
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: '/node_modules/'
			}
		],
	},
	output: {
		filename: '[name].js',
		chunkFilename: '[name].js',
		path: outPutPath
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					chunks: 'initial',
					name: 'vendor',
					test: /node_modules/,
					enforce: true
				},
			}
		}
	},
	plugins: [
		new CleanWebpackPlugin()
	]
}