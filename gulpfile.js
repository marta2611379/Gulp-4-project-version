'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');

function styles() {
    return gulp.src('app/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssnano())
        .pipe(autoprefixer())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('build/css'))
}

function watch() {
    gulp.watch('app/styles/**/*.scss', styles)
}

const build = gulp.parallel(styles);
gulp.task('build', build);










// function defaultTask(cb) {
//     // place code for your default task here
//     console.log('gulp');
//     cb();
//   }

//   exports.default = defaultTask