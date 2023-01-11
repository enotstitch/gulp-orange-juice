import htmlmin from 'gulp-htmlmin';

export const html = () => {
	return app.gulp
		.src(app.path.src.html)
		.pipe(
			app.plugins.plumber({
				errorHandler: app.plugins.notify.onError({
					title: 'HTML',
					message: 'Error: <%= error.message %>',
				}),
			}),
		)
		.pipe(
			app.plugins.fileInclude({
				prefix: '@',
				basepath: '@file',
			}),
		)
		.pipe(app.plugins.replace(/@img\//g, 'img/'))
		.pipe(
			app.plugins.if(
				app.isProd,
				app.plugins.size({
					title: 'До сжатия HTML',
				}),
			),
		)
		.pipe(
			app.plugins.if(
				app.isProd,
				htmlmin({
					collapseWhitespace: true,
				}),
			),
		)
		.pipe(
			app.plugins.if(
				app.isProd,
				app.plugins.size({
					title: 'После сжатия HTML',
				}),
			),
		)
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browserSync.stream());
};
