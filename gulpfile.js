let gulp = require('gulp')
    pump = require('pump')
    sass = require('gulp-sass')
    browserSync = require('browser-sync')
    tiny = require('gulp-tinypng-nokey')
    uglify = require('gulp-uglify')
    minifyCss = require('gulp-cssmin')
    rename = require('gulp-rename')
    babel = require('gulp-babel')
    sourcemaps = require('gulp-sourcemaps')
    concat = require('gulp-concat')
    ghPages = require('gulp-gh-pages');


gulp.task('js', function () {
  return gulp.src('app/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('app/js'))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('sass', () => {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream:true
    }))
    .pipe(minifyCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css'))
    .pipe(gulp.dest('dist/css'))
})

gulp.task('browserSync', () => {
  browserSync({
    server:{
      baseDir:'app'
    },
  })
})

gulp.task('compressImg', () => {
  gulp.src('app/images/*')
      .pipe(tiny())
      .pipe(gulp.dest('dist/images'));
});

gulp.task('watch', ['browserSync', 'sass', 'compressImg', 'js'], function() {
  gulp.watch('app/scss/**/*.scss', ['sass'])
  gulp.watch('app/*.html', browserSync.reload)
  gulp.watch('app/js/**/*.js', browserSync.reload)
  gulp.watch('app/images/*', ['compressImg']);
})
