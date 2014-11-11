'use strict';
/*!
 * Gulp Tasks
 */

/**
 * Module Dependencies
 */
var gulp = require('gulp'),
    del = require('del'),
    serve = require('gulp-serve');

gulp.task('default', function () {});

gulp.task('dev', ['build', 'serve', 'watch']);

gulp.task('clean', function (cb) {
  del(['./build/*'], cb);
});

gulp.task('build', ['clean'], function () {
  return gulp.src('./lib/pages/**/*')
    .pipe(gulp.dest('./build'));
});

gulp.task('serve', serve({
  port:8080,
  root: 'build',
  livereload: true
}));

gulp.task('watch', function() {
  gulp.watch('lib/**/*', ['build']);
});