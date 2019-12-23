'use strict';
​
const gulp = require('gulp');
const sass = require('gulp-sass');
​
gulp.task('sass', () => {
    return gulp.src('scss/styles.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'));
});
​
gulp.task('watch', () => {
    gulp.watch('scss/styles.scss', (done) => {
        gulp.series('sass') (done);
    });
});
​
gulp.task('default', gulp.series(['sass', 'watch']));