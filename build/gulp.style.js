const gulp = require('gulp');
const stylelint = require('gulp-stylelint');
const sass = require('gulp-dart-sass');
const postcss = require('gulp-postcss');
const packageImporter = require('node-sass-package-importer');
const Fiber = require('fibers');

gulp.task('copy', () => gulp
  .src(['../packages/**/*.scss'])
  .pipe(gulp.dest('../lib')));

gulp.task('compile', () => gulp
  .src(['../packages/**/*.scss'])
  .pipe(stylelint({
    reporters: [{
      formatter: 'string',
      console: true,
    }],
  }))
  .pipe(
    sass({
      importer: packageImporter(),
      outputStyle: 'compressed',
      linefeed: 'lf',
      fiber: Fiber,
    }).on('error', sass.logError),
  )
  .pipe(postcss())
  .pipe(gulp.dest('../lib')));

gulp.task('default', gulp.series('copy', 'compile'));
