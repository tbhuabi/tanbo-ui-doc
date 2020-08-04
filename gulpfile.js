const gulp = require('gulp');

gulp.task('copy', function () {
  return gulp.src('./node_modules/@tanbo/textbus/bundles/textbus.*').pipe(gulp.dest('./dist/static/textbus/'));
});

gulp.task('default', gulp.series('copy'));
