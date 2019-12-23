
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
var browserSync = require('browser-sync').create();
var jquery = require('gulp-jquery');
var cssimport = require("gulp-cssimport");
var rebaseUrls = require('gulp-css-rebase-urls');

gulp.task('css', function(){
    gulp.src('./css/*.css')
    .pipe(uglifycss({
        "maxLineLen": 80,
        "uglyComments" : true
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('sass', function () {
    return gulp.src('scss/**.scss')
      .pipe(sass({
        outputStyle: 'compressed'
    }))
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(gulp.dest('css'))
  });

gulp.task('watch', () => {
  gulp.watch('scss/styles.scss', (done) => {
      gulp.series('sass') (done);
    });
});

gulp.task('run', gulp.series('sass', 'watch', 'cssbase'));

const fs = require('fs');

var options = {};
gulp.task("import", function() {
    gulp.src("css/slick.css")
      .pipe(cssimport(options))
      .pipe(gulp.dest("dist/"));
    gulp.src("css/slick-theme.css")
      .pipe(cssimport(options))
      .pipe(gulp.dest("dist/"));
});
 
// async function asyncAwaitTask() {
//   const { version } = fs.readFileSync('package.json');
//   console.log(version);
//   await Promise.resolve('some result');
// }


gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'app'
      },
    })
  });

gulp.task('cssbase', function () {
  gulp.src('css/**/*.css')
    .pipe(rebaseUrls())
    .pipe(concat('style.css')) // <-- just an example
    .pipe(gulp.dest('./build/'));
});
//   gulp.task('jquery', function () {
//     return gulp.src('./node_modules/jquery/src')
//         .pipe(jquery({
//             flags: ['-deprecated', '-event/alias', '-ajax/script', '-ajax/jsonp', '-exports/global']
//         }))
//         .pipe(gulp.dest('./js'));
//     // creates ./public/vendor/jquery.custom.js
// });

// exports.default = asyncAwaitTask;