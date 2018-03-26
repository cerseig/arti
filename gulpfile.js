let gulp = require('gulp')
    pump = require('pump')
    sass = require('gulp-sass')
    browserSync = require('browser-sync')
    deploy = require('gulp-gh-pages')
    tiny = require('gulp-tinypng-nokey')
    uglify = require('gulp-uglify')
    minifyCss = require('gulp-cssmin')
    rename = require('gulp-rename')

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

gulp.task('js', () => {
  return gulp.src('app/js/**/*.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({
      stream:true
    }))
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

gulp.task('deploy', () => {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task('watch', ['browserSync', 'sass', 'compressImg'], function() {
  gulp.watch('app/scss/**/*.scss', ['sass'])
  gulp.watch('app/*.html', browserSync.reload)
  gulp.watch('app/js/**/*.js', browserSync.reload)
  gulp.watch('app/images/*', ['compressImg']);
})
