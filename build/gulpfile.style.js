const gulp = require('gulp');
const stylelint = require('gulp-stylelint');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const packageImporter = require('node-sass-package-importer');

sass.compiler = require('sass');

gulp.task('copy', () => gulp
  .src(['../src/**/*.scss'])
  .pipe(gulp.dest('../esm'))
  .pipe(gulp.dest('../lib')));

gulp.task('compile', () => gulp
  .src(['../src/**/*.scss'])
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
    }).on('error', sass.logError),
  )
  .pipe(postcss())
  .pipe(gulp.dest('../esm'))
  .pipe(gulp.dest('../lib')));

gulp.task('default', gulp.series('copy', 'compile'));
