const gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	browserSync = require('browser-sync').create(),
	autoprefixer = require('autoprefixer'),
	cssnano = require('cssnano'),
	postcss = require('gulp-postcss'),
	cleanCSS = require('gulp-clean-css'),
	concat = require('gulp-concat'),
	imagemin = require('gulp-imagemin'),
	changed = require('gulp-changed'),
	uglify = require('gulp-uglify'),
	lineec = require('gulp-line-ending-corrector'),
	JS_SRC = 'src/assets/js/*.js',
	JS_DEST = 'src/',
	STYLE_SRC = 'src/assets/scss/*.scss',
	STYLE_DEST = 'src/';
// The server function called later
/* function serve(done) {
	browserSync.init({
		server: {
			baseDir: './src',
			index: '/index.html',
		},
		port: 3000,
		// open: false,
	});
	done();
} */

//The server function to reload
function reload(done) {
	browserSync.reload();
	done();
}

function jsTask() {
	return gulp.src(JS_SRC).pipe(uglify()).pipe(gulp.dest(JS_DEST)).pipe(browserSync.stream());
}

//compile sass
function style() {
	var processors = [autoprefixer, cssnano];
	return gulp
		.src(STYLE_SRC)
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss(processors)) /*add*/ // PostCSS plugins
		.pipe(cleanCSS())
		.pipe(sourcemaps.write()) // write sourcemaps file in current directory
		.pipe(gulp.dest(STYLE_DEST))
		.pipe(browserSync.stream());
}
function watch() {
	gulp.watch(STYLE_SRC, gulp.series(style, reload));
	gulp.watch(JS_SRC, gulp.series(jsTask, reload));
	gulp.watch('src/*.html', reload);
}
//Compiling & Moving stylesheets & Scripts
var files = gulp.parallel(style, jsTask);
//Building task
//var build = gulp.series(files, gulp.parallel(serve, watch));
var build = gulp.series(files, gulp.parallel(watch));
gulp.task(build);
gulp.task('default', build);
