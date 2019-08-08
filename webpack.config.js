const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		path: `${__dirname}/public/scripts/`,
		filename: 'app.js'
	},
	watch: true,
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
			},
			{
				test: /\.scss$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			},
			{
        test: /\.(ttf|eot|svg|woff2|woff)(\?[\s\S]+)?$/,
        use: 'file-loader',
      }
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'public/')
	}
};
