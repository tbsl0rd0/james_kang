var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var clean_css = require('gulp-clean-css');

gulp.task('index_css', function () {
	return gulp.src([
		'node_modules/normalize.css/normalize.css',

		'libraries/font-awesome-4.7.0/css/font-awesome.min.css',

		'fonts/fonts.css'
  ])
	.pipe(concat('css.min.css'))
  .pipe(clean_css())
	.pipe(gulp.dest('distribution/index/css'));
});

gulp.task('index_js', function () {
	return gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/angular/angular.min.js',

		'node_modules/angular-route/angular-route.min.js',
		'node_modules/angular-animate/angular-animate.min.js',

    'components/bundles/index_components_bundle.js'
  ])
	.pipe(concat('javascript.min.js'))
  .pipe(uglify({
		mangle: false
	}))
	.pipe(gulp.dest('distribution/index/javascripts'));
});

gulp.task('watch', function () {
	gulp.watch('components/bundles/index_components_bundle.js', ['index_js']);
});

gulp.task('default', [
	'index_css',
	'index_js',
	'watch'
]);
