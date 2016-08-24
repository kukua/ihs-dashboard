var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

var path = './node_modules/';
var bootstrap = path + 'bootstrap/js/';

elixir(function(mix) {

	mix.less(
        ['main.less'],
	    'public/assets/main.min.css'
    )

	mix.scripts([
		/* Basic */
		path + 'jquery/dist/jquery.js',
		path + 'moment/moment.js',

		/* Bootstrap components */
		bootstrap + 'button.js',
		bootstrap + 'collapse.js',
		bootstrap + 'dropdown.js',
		bootstrap + 'transition.js',

		/* Extensions */
		path + 'bootstrap-datepicker/dist/js/bootstrap-datepicker.js',

		/* Custom scripts */
		'script.js',
		'leaflet.js'
	],
	'public/assets/main.min.js');
});
