const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		path: `${__dirname}/public/scripts/`,
		filename: 'app.js'
	},
	watch: true,
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000
	},
	mode: 'development',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'public/')
	}
};
