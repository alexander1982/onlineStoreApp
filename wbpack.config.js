import webpack from 'webpack';
let path = require('path');

module.exports = {
	devvtool: 'cheap-module-eval-source-map',
	entry: [
	'script-loader!jquery/dist/jquery.min.js',
	'script-loader!foundation-sites/dist/js/foundation.min.js',
	'./app/app.jsx'
	],
	output: {
		path: __dirname,
		file: './public/bundle.js'
	},
	plugins: [
		new webpack.ProvidePlugin({
			jquery: 'jQuery'
		}),
	  new webpack.DefinePlugin({
		  'process.env': {
			  'NODE_ENV': JSON.stringify('production')
		  }
	  }),
	  new webpack.LoaderOptionsPlugin({
		  options: {
			  sassLoader: {
				  includePaths: [path.resolve(__dirname, './node_modules/foundation-sites/scss')]
			  }
		  }
	  })
	],
	resolve: {
		alias: {},
		extensions: ['.jsx', '.js', '.scss'],
		modules: [__dirname, 'node_modules', './app/components', './app/api']
	},
	modules: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-3']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules)/
			}
		]
	}
};



