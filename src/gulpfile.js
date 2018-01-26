var gulp = require('gulp');

var plugins = require('gulp-load-plugins')({
  'config': require('./package.json'),
  'pattern': ['*'],
  'scope': ['dependencies','devDependencies']
});

gulp.task('sass:front', require('./tasks/sass')(gulp, plugins, 'theme', '../dist/css', false));
gulp.task('webpack:main', require('./tasks/webpack')(gulp, plugins, 'main', '../dist/js'));
gulp.task('copy-vendor', require('./tasks/copy-vendor')(gulp, plugins));

// Optional
gulp.task('iconfont', require('./tasks/iconfont')(gulp, plugins));

gulp.task('img', require('./tasks/img')(gulp, plugins));

gulp.task('font:typo', require('./tasks/fontTypo')(gulp, plugins));

gulp.task('favicon:img', require('./tasks/favicons')(gulp, plugins));
gulp.task('favicon:code', require('./tasks/faviconsCode')(gulp, plugins));

gulp.task('sass', gulp.parallel('sass:front'));

gulp.task('webpack', gulp.parallel('webpack:main'));
gulp.task('favicon', gulp.parallel('favicon:img', 'favicon:code'));

gulp.task('watch:sass', function () {
  gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});
gulp.task('watch:js', function () {
  gulp.watch('./js/main.js', gulp.series('webpack'));
});
gulp.task('watch:iconfont', function () {
  gulp.watch('./fonts/iconfont/*.svg', gulp.series('iconfont'));
});


gulp.task('watch', gulp.parallel('sass', 'webpack', 'watch:sass', 'watch:js','watch:iconfont'));

gulp.task('default', gulp.parallel('copy-vendor', 'sass', 'webpack'));
