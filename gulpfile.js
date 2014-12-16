'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('jshint:js', function () {
  return gulp.src('*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('jscs:js', function () {
  return gulp.src('*.js')
    .pipe($.jscs());
});

gulp.task('watch', function () {
  gulp.watch('*.js', ['jshint:js']);
});

gulp.task('default', ['jscs:js', 'jshint:js']);
