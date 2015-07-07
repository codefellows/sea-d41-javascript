var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

gulp.task('default', ['test', 'lint'], function() {});

gulp.task('test', function() {
  return gulp.src('test/*test.js')
             .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('lint', function() {
  return gulp.src('*.js') 
             .pipe(jshint())
             .pipe(jshint.reporter('default'));
});
