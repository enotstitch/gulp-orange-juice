const isDev = !process.argv.includes('--build');

module.exports = {
	output: {
		filename: 'scripts.min.js',
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				loader: 'babel-loader',
				exclude: '/node_modules/',
			},
		],
	},
	mode: isDev ? 'development' : 'production',
	devtool: isDev ? 'source-map' : false,
};
