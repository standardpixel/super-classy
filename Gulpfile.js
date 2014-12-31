var gulp    = require('gulp'),
    watch   = require('gulp-watch'),
    rename  = require('gulp-rename'),
    jshint  = require('gulp-jshint'),
    uglify  = require('gulp-uglify'),
    amdWrap = require('gulp-wrap-amd');

var paths = {
  js : './src/*.js'
};

gulp.task('lint', function() {
  return gulp.src(paths.js)
  .pipe(jshint({
    "predef" : [
    "window"
    ],
    "expr" : true
  }))
  .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('serverize', function() {
  return gulp.src(paths.js)
  .pipe(gulp.dest('./server-dist'));
});

gulp.task('clientize', function() {
  gulp.src(paths.js)
  .pipe(amdWrap({
    deps: ['require','module','exports'],  // dependency array
    params: ['require','module','exports'] // params for callback
  }))
  .pipe(uglify({}))
  .pipe(gulp.dest('./client-dist'));

});

gulp.task('default',function(){
  gulp.start('lint');
  gulp.start('serverize');
  gulp.start('clientize');
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch(paths.js, ['lint','serverize','clientize']);
  console.log('watching directory:' + paths.js);
});
