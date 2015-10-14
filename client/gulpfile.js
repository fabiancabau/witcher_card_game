var gulp = require('gulp'),
    mini = require('gulp-minify-css'),
    less = require('gulp-less');

gulp.task('default', ['less'], function () {
    gulp.watch('assets/less/**/*', ['less']);
});

gulp.task('less', function (){
  return gulp.src('assets/less/main.less')
          .pipe(less())
          .pipe(mini())
          .pipe(gulp.dest('assets/css'));
});
