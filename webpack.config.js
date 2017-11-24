let webpack = require('webpack');
let path = require('path');
let envFile = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

try {
	envFile(path.join(__dirname, 'public/config/' + process.env.NODE_ENV + '.env'));
} catch(e) {

}

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
				NODE_ENV : JSON.stringify(process.env.NODE_ENV),
				API_KEY : JSON.stringify(process.env.API_KEY),
				SECRET_NAME : JSON.stringify(process.env.SECRET_NAME),
				EMAIL : JSON.stringify(process.env.EMAIL)
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
			AuthStuff        : 'app/authStuff/AuthStuff.jsx',
			ApplicationStyles: 'app/styles/app.scss',
			Actions          : 'app/actions/Actions.jsx',
			API              : 'app/api/StoreAPI.jsx',
			StoreApp         : 'app/components/StoreApp.jsx',
			Reducers         : 'app/reducers/reducers.jsx',
			ConfigureStore   : 'app/store/configureStore.jsx'
		},
		extensions: ['.jsx', '.js', '.scss'],
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
				test  : /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader?limit=10000&mimetype=application/font-woff"
			},
			{
				test  : /\.(ttf|eot|svg|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "file-loader"
			}
		]
	},
	devtool  : 'cheap-module-eval-source-map'
};



