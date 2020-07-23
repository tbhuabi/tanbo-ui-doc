const gulp = require('gulp');

gulp.task('copy', function () {
  return gulp.src('./node_modules/@tanbo/tbus/bundles/tbus.*').pipe(gulp.dest('./dist/static/tbus/'));
});

gulp.task('default', gulp.series('copy'));
