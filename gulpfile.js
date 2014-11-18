'use strict';
/*!
 * Gulp Tasks
 */

/**
 * Module Dependencies
 */
var gulp = require('gulp'),
    del = require('del'),
    serve = require('gulp-serve'),
    rename = require('gulp-rename'),
    gm = require('gulp-gm'),
    stringify = require('virtual-dom-stringify'),
    through = require('through2'),
    unrequire = require('./lib/unrequire'),
    Vinyl = require('vinyl'),
    path = require('path'),
    streamFromArray = require('stream-from-array'),
    layout = require('./lib/layout'),
    app = require('./lib/app'),
    pages = require('./data/pages'),
    states;

gulp.task('default', function () {});

gulp.task('dev', ['build', 'serve', 'watch']);

gulp.task('clean', function (cb) {
  del(['./build/*'], cb);
});

gulp.task('images', function () {

  return gulp.src('./data/images/*.jpg')
    .pipe(gm(function (file) {
      return file.resize(960, 540);
    }))
    .pipe(rename({ suffix: "-960x540" }))
    .pipe(gulp.dest('./build/images'));

});


gulp.task('thumbnails', function () {

  return gulp.src('./data/images/*.jpg')
    .pipe(gm(function (file) {
      return file.resize(240, 135);
    }))
    .pipe(rename({ suffix: "-240x135" }))
    .pipe(gulp.dest('./build/images'));

});

gulp.task('build', ['clean', 'thumbnails', 'images'], function () {

  var stateToTree,
      treeToVinyl;

  stateToTree = through.obj(function (data, enc, next) {
    var tree = layout(app(data)),
        out = {
          id: data.page.id,
          contents: tree
        };
    this.push(out);
    next();
  })

  treeToVinyl = through.obj(function (tree, enc, next) {
    var file = new Vinyl({
      cwd: process.cwd(),
      base: path.join(process.cwd()),
      path: path.join(process.cwd(), tree.id, '/index.html'),
      contents: new Buffer('<!doctype html> ' + stringify(tree.contents))
    });
    this.push(file);
    next();
  });

  unrequire(require.resolve('./lib/layout'));
  layout = require('./lib/layout');
  unrequire(require.resolve('./lib/app'));
  app = require('./lib/app');
  unrequire(require.resolve('./data/pages'));
  pages = require('./data/pages');

  states = pages.map(function (page) {
    return {
      page: page,
      pages: pages
    };
  });

  return streamFromArray.obj(states)
    .pipe(stateToTree)
    .pipe(treeToVinyl)
    .pipe(gulp.dest('./build'));
});

gulp.task('serve', serve({
  port:8080,
  root: 'build',
  livereload: true
}));

gulp.task('watch', function () {
  gulp.watch('lib/**/*', ['build']);
});