var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// Production
gulp.task('sass', function(done){
  gulp.src('./src/scss/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('./public/css/'));
  done();
});

// Development
gulp.task('sass:dev', function(done){
  gulp.src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('./public/css/'));
  done();
});

// Watch
gulp.task('sass:watch', function(done){
  gulp.watch('./src/scss/**/*.scss', gulp.task('sass:dev'));
  done();
});

// Default
gulp.task('default', gulp.task('sass'));