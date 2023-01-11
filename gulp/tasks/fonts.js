import newer from 'gulp-newer';

export const fonts = () => {
	return app.gulp
		.src(`${app.path.src.fonts}`, {})
		.pipe(
			app.plugins.plumber({
				errorHandler: app.plugins.notify.onError({
					title: 'Fonts',
					message: 'Error: <%= error.message %>',
				}),
			}),
		)
		.pipe(newer(app.path.build.fonts))
		.pipe(app.gulp.dest(app.path.build.fonts))
		.pipe(app.plugins.browserSync.stream());
};
