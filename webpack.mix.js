/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for our WordPress theme. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const mix                = require( 'laravel-mix' ),
      path               = require( 'path' ),
      fs                 = require( 'fs' ),
      dotenv             = require( 'dotenv' ),
      ImageminPlugin     = require( 'imagemin-webpack-plugin' ).default,
      imageminMozJpeg    = require( 'imagemin-mozjpeg' ),
      CleanWebpackPlugin = require( 'clean-webpack-plugin' ),
      CopyWebpackPlugin  = require( 'copy-webpack-plugin' ),
      argv               = require( 'minimist' )( process.argv.slice( 2 ) );

let envFile = __dirname + '/../../../../.env';
if ( fs.existsSync( envFile ) ) {
	dotenv.config( {
		path: fs.realpathSync( envFile )
	} );
}

mix.options( {
	publicPath: 'dist',
	processCssUrls: false
} )

	.sourceMaps( true, 'inline-source-map' )

	//Compile the js
	.js(
		'assets/scripts/main.js',
		'scripts'
	)

	.js(
		'assets/scripts/editor.js',
		'scripts'
	)

	//Compile the sass
	.sass( 'assets/styles/main.scss', 'styles', { outputStyle: 'compressed' } )

	//Add browserSync
	.browserSync( {
		proxy: argv.devUrl || process.env.WP_HOME,
		tunnel: argv.tunnel || false,
		cors: !!argv.tunnel,
		socket: {
			domain: "' + location.protocol + '//' + location.hostname + (location.port ? ':'+location.port : '') + '"
		},
		files: [
			"dist/styles/**/*",
			"dist/scripts/**/*",
			"dist/images/**/*",
			"dist/icons/**/*",
			'{lib,templates}/**/*.php',
			'*.php',
		],
	} )

	//Copy fonts
	.copy( 'assets/fonts/**/*', 'dist/fonts' )

	// Copy images
   .copy( 'assets/images/**/*', 'dist/images' )

	// Copy icons
   .copy( 'assets/icons/**/*', 'dist/icons' )
;

let webpackPlugins = [
	new CopyWebpackPlugin( [ {
		from: 'assets/images',
		to: 'images',
		ignore: '.gitkeep'
	} ] ),
	new ImageminPlugin( {
		test: /\.(jpe?g|png|gif|svg)$/i,
		svgo: {
			plugins: [
				{ removeViewBox: false }
			]
		},
		plugin: [
			imageminMozJpeg( {
				quality: 100,
				progressive: true
			} )
		]
	} )
];

if ( !argv.watch ) {
	webpackPlugins = [
		new CleanWebpackPlugin,
		...webpackPlugins
	];
}

//Compile the images
mix.webpackConfig( {
	output: {
		publicPath: !argv.hot ? `/${__dirname.split(path.sep).slice(-3).join('/')}/dist/` : '/',
	},
	externals: {
		jquery: 'jQuery'
	},
	plugins: webpackPlugins
} );

//Add versions on production
if ( mix.inProduction() ) {
	mix.version()
}
