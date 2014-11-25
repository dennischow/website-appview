/* --------------------
// Commond
* Install gulp globally : sudo npm install -g gulp
* Install gulp : npm install --save-dev gulp

* Generate Build Package : gulp generate-build
* Remove Build Package : gulp clean-build
-------------------- */




/* --------------------
// Require Gulp Plugins
-------------------- */
var gulp 		= require('gulp');
var clean 		= require('gulp-clean');
var less 		= require('gulp-less');
var minifyCSS 	= require('gulp-minify-css');
var uglify 		= require('gulp-uglify');
var concat 		= require('gulp-concat');
var replace 	= require('gulp-replace-task');

var runSequence = require('run-sequence');




/* --------------------
// Build Destination
-------------------- */
var buildPath = 'BUILD-PRODUCTION';


/* --------------------
// Copy Bower Components
-------------------- */
gulp.task('bowerComponents', function(){
	
	// Using Gulp native method
	gulp.src([
		'./bower_components/**'
	])
	.pipe(gulp.dest(buildPath + '/vendors'));
	console.log('bowerComponents Copied by native method');

});


/* --------------------
// HTML Task
-------------------- */
// Replace 
gulp.task('htmls', function(){

	gulp.src('./*.html')
		.pipe(replace({
			patterns: [
				{
					match: /bower_components\//g, // Replace bower package path to verdors in build
					replacement: 'vendors/'
				}
			]
		}))
		.pipe(gulp.dest(buildPath));
		console.log('runs HTMLs');
});


/* --------------------
// LESS Compile Task
-------------------- */
gulp.task('compile-less', function(){

	gulp.src('./assets/less/core-style.less')

		 // Push to local assets/css 
		.pipe(less(
			{compress: false}
		))
		.pipe(gulp.dest('./assets/css'))

		// Push to Build assets/css
		.pipe(less(
			{compress: true}
		))
		.pipe(gulp.dest( buildPath + '/assets/css'));

		console.log('runs LESS Compile');

});


/* --------------------
// Scriptes Task
-------------------- */
// Uglifies
gulp.task('scripts', function(){

	// JS Files Path
	var jsPath = './assets/js/';

	// JS Files Orders
	var selectedJS = [
			jsPath + '_functions.js',
			jsPath + '_utilities.js'
	];

	gulp.src(selectedJS)

		// Concat & Compress Files
		.pipe(concat('core-script.js'))

		// Push to Build assets/js
		.pipe(gulp.dest('assets/js'))

		// Push to Build assets/js
		.pipe(uglify())
		.pipe(gulp.dest(buildPath + '/assets/js'));

		console.log('runs scripts');

});



/* --------------------
// Clean Build Package
-------------------- */
gulp.task('clean-build', function(){
	console.log(buildPath + ' Cleaned');
	return	gulp.src(buildPath, {read: false})
			.pipe(clean());
});


/* --------------------
// Build Package
-------------------- */
gulp.task('build', function(callback){
	runSequence(
		'clean-build', 
		[
			// 'compress-images',		
			'bowerComponents', 
			'htmls',
			'compile-less', 
			'scripts'
		], 
		callback
	);
	console.log(buildPath + ' Generated');
});


/* --------------------
// Gulp Execution
-------------------- */
gulp.task('default', function(){
	console.log('****************** GULP Detected ******************');
});

