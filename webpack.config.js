module.exports = {
	entry: './src/app.js',
	output: {
		path: `${__dirname}/public/scripts/`,
		filename: 'app.js'
	},
	watch: false,
	mode: 'development', //ta opcja zostanie pominięta jeżeli użyjemy npm run build
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
	}
};
