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
    fs = require('fs'),
    gm = require('graphicsmagick-stream'),
    runSequence = require('run-sequence'),
    stringify = require('virtual-dom-stringify'),
    through = require('through2'),
    unrequire = require('./lib/unrequire'),
    Vinyl = require('vinyl'),
    path = require('path'),
    streamFromArray = require('stream-from-array'),
    processCSS = require('suitcss-preprocessor'),
    layout = require('./lib/layout'),
    app = require('./lib/app'),
    pages = require('./data/pages'),
    images = require('./data/images'),
    states;

gulp.task('default', function () {});

gulp.task('dev', ['build', 'serve', 'watch']);

gulp.task('clean', function (cb) {
  del(['./build/*'], cb);
});

gulp.task('styles', function () {
  return gulp.src('./lib/layout.css')
    .pipe(through.obj(function (data, enc, next) {
      data.contents = new Buffer(
        processCSS(data.contents.toString('utf8'), {
          source: data.path
        })
      );
      this.push(data);
      next();
    }))
    .pipe(rename({
      basename: 'style',
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('images', function () {

  var stateToVinyl,
      transform = gm();

  unrequire(require.resolve('./data/images'));
  images = require('./data/images');

  stateToVinyl = through.obj(function (data, enc, next) {
    var file = new Vinyl({
      cwd: process.cwd(),
      base: path.join(process.cwd()),
      path: path.join(process.cwd(), '/images', data.id),
      contents: fs.createReadStream(data.src).pipe(transform({ scale: data.scale }))
    });
    this.push(file);
    next();
  });

  return streamFromArray.obj(images)
    .pipe(stateToVinyl)
    .pipe(gulp.dest('./build'));

});

gulp.task('pages', function () {

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

gulp.task('build', function (callback) {
  runSequence('clean', ['pages', 'images', 'styles'], callback);
})

gulp.task('serve', serve({
  port:8080,
  root: 'build',
  livereload: true
}));

gulp.task('watch', function () {
  gulp.watch('lib/**/*', ['build']);
});