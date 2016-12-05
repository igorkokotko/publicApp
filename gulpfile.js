'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('lint', function(){
   return gulp.src('js/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format());
        
});
gulp.task('default', ['lint'], function () {
    gulp.watch('js/main.js', ['lint']);
});
