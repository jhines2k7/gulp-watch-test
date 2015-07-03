var livereload = require('gulp-livereload'),
    gulp = require('gulp');

gulp.task('watch', function() {
	var server = livereload();

    gulp.watch('css/*.css').on('change', function(file){
        server.changed(file.path);
    });
});

gulp.task('default', ['watch']);