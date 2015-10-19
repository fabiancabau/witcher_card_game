var gulp = require('gulp'),

    //CSS
    mini = require('gulp-minify-css'),
    less = require('gulp-less'),

    //REACT
    browserify = require("browserify"),
    babelify   = require("babelify"),
    source     = require("vinyl-source-stream"),
    buffer     = require('vinyl-buffer'),
    uglify     = require("gulp-uglify"),

    //UTIL
    connect = require('gulp-connect');

gulp.task('default', ['less', 'react'], function () {
    connect.server({
      port: 3000,
      root: "./",
      livereload : true
    });

    gulp.watch('assets/less/**/*', ['less']);
    gulp.watch('app/**/*', ['react']);
});

gulp.task('less', function (){
  return gulp.src('assets/less/main.less')
          .pipe(less())
          .pipe(mini())
          .pipe(gulp.dest('assets/css'))
          .pipe(connect.reload());
});

gulp.task("react", function () {
  return browserify("app/main.js")
    .transform(babelify.configure({
      optional: ["es7.decorators"]
    }))
    .bundle()
    .pipe(source("app.js"))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest("assets/js"))
    .pipe(connect.reload());
});
