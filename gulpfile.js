var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var tinyPNG = require('gulp-tinypng-compress');

gulp.task('default', defaultTask);

function defaultTask(done) {
  // place code for your default task here
  done();
}
// переносим и сжимаем все файлы CSS
gulp.task('minify-css', function (done) {
  return gulp.src('./src/css/*.css')
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('dist/css/'))
  done();
});
// переносим все файлы JS
gulp.task('move-js', function (done) {
  return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('dist/js/'))
  done();
});
// переносим и сжимаем все файлы HTML
gulp.task('htmlmin', function (done) {
  return gulp.src('./src/*.html')
    .pipe(htmlmin({
      // убираем все пробелы
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist/'))
  done();
});
// переносим файлы шрифтов
gulp.task('fonts', function (done) {
  // ./src/fonts/**/* означает 'берем из всех папок се файлы'
  return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts/'))
  done();
});

// переносим и сжимаем наши изображения
gulp.task('tinypng', function (done) {
  return gulp.src('./src/img/**/*.{png,jpg,jpeg}')
    .pipe(tinyPNG({
      key: '0HCZCVkCCHY5cXghPRfvpF1nlJlb4WqX'
    }))
    .pipe(gulp.dest('dist/img/'));
  done();
});