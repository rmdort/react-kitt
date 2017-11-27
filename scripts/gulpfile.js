var gulp = require('gulp')

gulp.task('default', () => {
  return gulp.src(['./../src/**/*.scss'])
    .pipe(gulp.dest('./../lib'))
})