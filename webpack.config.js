let webpack = require('webpack');
let path = require('path');

module.exports = {
	entry    : [
		'script-loader!jquery/dist/jquery.min.js',
		'script-loader!foundation-sites/dist/js/foundation.min.js',
		'script-loader!jquery-slimscroll/jquery.slimscroll.min.js',
		'./app/app.jsx'
	],
	externals: {
		jquery: 'jQuery'
	},
	output   : {
		path    : __dirname,
		filename: './public/bundle.js'
	},
	plugins  : [
		new webpack.ProvidePlugin({
			'jQuery': 'jquery',
			'$'     : 'jquery'
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				sassLoader: {
					includePaths: [
						path.resolve(__dirname, './node_modules/foundation-sites/scss')
					]
				}
			}
		})
	],
	resolve  : {
		alias     : {
			ApplicationStyles: 'app/styles/app.scss',
			StoreApp         : 'app/components/StoreApp.jsx',
			Reducers         : 'app/reducers/reducers.jsx',
			ConfigureStore   : 'app/store/configureStore.jsx'
		},
		extensions: ['.jsx', '.js', '.scss', '.png'],
		modules   : [__dirname, 'node_modules', './app/components']
	},
	module   : {
		loaders: [
			{
				loader : 'babel-loader',
				query  : {
					presets: ['react', 'es2015', 'stage-3']
				},
				test   : /\.jsx?$/,
				exclude: /(node_modules)/
			},
			{ 
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
				loader: "url-loader?limit=10000&mimetype=application/font-woff" 
			},
			{ 
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
				loader: "file-loader" 
			}
		]
	},
	devtool  : 'cheap-module-eval-source-map'
};



