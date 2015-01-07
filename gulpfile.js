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
    frontMatter = require('gulp-front-matter'),
    Showdown = require('showdown'),
    fs = require('fs'),
    gm = require('gm'),
    runSequence = require('run-sequence'),
    stringify = require('virtual-dom-stringify'),
    through = require('through2'),
    unrequire = require('./lib/unrequire'),
    Vinyl = require('vinyl'),
    path = require('path'),
    streamFromArray = require('stream-from-array'),
    processCSS = require('suitcss-preprocessor'),
    browserify = require('browserify'),
    layout = require('./lib/layout'),
    app = require('./lib/app'),
    customImages = require('./data/custom-images');

gulp.task('default', function () {});

gulp.task('pages', function () {

  var pages = [],
      converter = new Showdown.converter(),
      markdown,
      transformData,
      appendPages,
      stateToTree,
      treeToVinyl;

  markdown = through.obj(function (file, enc, next) {
    file.contents = new Buffer(converter.makeHtml(file.contents.toString()));
    this.push(file);
    next();
  });

  transformData = through.obj(function (file, enc, next) {
    // change date to number
    file.data.date = file.data.date.valueOf();
    file.data.id = file.data.id || '/' + file.path.substring(file.base.length, file.path.length - 3);
    if (file.contents.length > 0) {
      file.data.content = '<div>' + file.contents.toString('utf8') + '</div>';
    };
    this.push(file.data);
    next();
  });

  appendPages = through.obj(function (data, enc, next) {
    pages.push(data);
    next();
  },
  function (next) { // flush function
    var self = this;
    pages.map(function (page) {
      self.push({
        page: page,
        pages: pages
      });
    });
    next();
  });

  stateToTree = through.obj(function (data, enc, next) {
    // pages without a layout exist just for data and should not be rendered.
    if (data.page.layout) {
      var tree = layout(app(data)),
          out = {
            id: data.page.id,
            contents: tree
          };
      this.push(out);
    };
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

  return gulp.src('./data/**/*.md')
    .pipe(frontMatter({
      property: 'data'
    }))
    .pipe(markdown)
    .pipe(transformData)
    .pipe(appendPages)
    .pipe(stateToTree)
    .pipe(treeToVinyl)
    .pipe(gulp.dest('./build'));
});

gulp.task('dev', ['build', 'serve', 'watch']);

gulp.task('clean', function (cb) {
  del(['./build/*', '!./build/.git', '!./build/readme.md', '!./build/CNAME'], cb);
});

gulp.task('scripts', function () {
  return gulp.src('./lib/client.js', { buffer: false })
    .pipe(rename('index.js'))
    .pipe(through.obj(function (file, enc, next) {

      file.contents = browserify(file.contents, { basedir: __dirname + '/lib' })
        .transform({ global: true }, 'uglifyify')
        .bundle();

      this.push(file);
      next();
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('styles', function () {
  return gulp.src('./lib/app.css')
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
  return gulp.src('./data/images/+(sculpture|lightworks|paintings)/*.jpg',
    { buffer: false })
    .pipe(through.obj(function (file, enc, next) {
      file.contents = gm(file.contents)
        .strip()
        .quality(85)
        .gravity('Center')
        .resize(960, 800, '>')
        .stream();
      this.push(file);
      next();
    }))
    .pipe(gulp.dest('./build/images'));
});

gulp.task('thumbnails', function () {
  return gulp.src('./data/images/+(sculpture|lightworks|paintings)/*.jpg',
    { buffer: false })
    .pipe(rename({suffix:'-thumbnail'}))
    .pipe(through.obj(function (file, enc, next) {
      file.contents = gm(file.contents)
        .strip()
        .quality(85)
        .gravity('Center')
        .resize(undefined, 135)
        .stream();
      this.push(file);
      next();
    }))
    .pipe(gulp.dest('./build/images'));
});

gulp.task('custom-images', function () {

  var stateToVinyl;

  unrequire(require.resolve('./data/custom-images'));
  customImages = require('./data/custom-images');

  stateToVinyl = through.obj(function (data, enc, next) {

    var contents,
        file;

    contents = gm(fs.createReadStream(data.src, data.id))
      .strip()
      .quality(85)
      .gravity(data.gravity || 'Center')

    if (data.scale) {
      contents = contents.resize(data.scale.width, data.scale.height, data.scale.options);
    };

    if (data.crop) {
      contents = contents.crop(data.crop.width, data.crop.height, data.crop.x, data.crop.y);
    };

    contents = contents.stream();

    file = new Vinyl({
      cwd: process.cwd(),
      base: path.join(process.cwd()),
      path: path.join(process.cwd(), '/images', data.id),
      contents: contents
    });
    this.push(file);
    next();
  });

  return streamFromArray.obj(customImages)
    .pipe(stateToVinyl)
    .pipe(gulp.dest('./build'));

});

gulp.task('build', function (callback) {
  runSequence('clean', ['pages', 'images', 'thumbnails', 'custom-images', 'styles', 'scripts'], callback);
})

gulp.task('serve', serve({
  port:8080,
  root: 'build',
  livereload: true
}));

gulp.task('watch', function () {
  gulp.watch(['lib/**/*', 'data/**/*'], ['build']);
});