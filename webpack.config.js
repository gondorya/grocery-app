const path = require('path');

module.exports = {
	entry: './src/app.tsx',
	output: {
		path: `${__dirname}/public/scripts/`,
		filename: 'app.js'
	},
	resolve: {
		extensions: [ '.ts', '.tsx', '.js' ]
	},
	watch: true,
	mode: 'development',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.scss$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			},
			{
				test: /\.(ttf|eot|svg|woff2|woff)(\?[\s\S]+)?$/,
				use: 'file-loader'
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader'
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'public/'),
		publicPath: '',
		historyApiFallback: true
	}
};
