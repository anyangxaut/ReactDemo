var path = require('path')
var webpack = require('webpack');

module.exports = {
	entry: ['./src/index.js'],
	output: {
		path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
		extensions: ['', '.js', '.jsx']
    }
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false,
			},
		})
	],
	module: {
		loaders: [
		{
			test: /\.js$/, 
			loader: "jsx!babel"
		},
		{
			test: /\.css$/,
			loader: "style!css?module"
		}]
	}
}