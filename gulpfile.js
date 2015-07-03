var gulp = require('gulp'),
    watch = require('gulp-watch'),
	connect = require('gulp-connect');

gulp.task('default', ['server', 'reload']);

gulp.task('server', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('reload', function(){
    gulp.src(['css/*.css'])
        .pipe(watch())
        .pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch('css/*.css');
});